import React, { useState } from 'react';

const Form = ({ createTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      createTodo(value);
      setValue('');
    }
  };

  return (
    <div className="flex  mt-10">
      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="outline-none bg-transparent border-2 border-yellow-500 p-2 w-[300px] text-white mb-4 rounded placeholder:text-yellow-500"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="What task do you have today?"
        />
        <button
          type="submit"
          className="bg-green-500 p-2 text-green-800 cursor-pointer ml-2 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
