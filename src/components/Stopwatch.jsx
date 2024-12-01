import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect to manage the timer lifecycle
  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    // Cleanup function to clear the interval
    return () => clearInterval(timer);
  }, [isRunning]);

  // Format time (hh:mm:ss)
  const formatTime = () => {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Stopwatch</h1>
      <div className="text-6xl font-mono mb-8 text-blue-600">{formatTime()}</div>
      <div className="flex space-x-4">
        <button
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 focus:ring-2 focus:ring-green-400"
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400"
          onClick={() => setIsRunning(false)}
          disabled={!isRunning}
        >
          Pause
        </button>
        <button
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 focus:ring-2 focus:ring-red-400"
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
