import React, { useState } from "react";

const DragAndDrop = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
  ]);

  const handleDragStart = (index) => {
    setDraggedItem(index);
  };

  const handleDragOver = (index) => {
    if (draggedItem === index) return;

    const updatedItems = [...items];
    const [removedItem] = updatedItems.splice(draggedItem, 1);
    updatedItems.splice(index, 0, removedItem);

    setDraggedItem(index);
    setItems(updatedItems);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Drag and Drop</h1>
      <ul className="w-64 bg-white rounded shadow-md">
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => {
              e.preventDefault();
              handleDragOver(index);
            }}
            onDragEnd={handleDragEnd}
            className={`p-4 text-center border-b ${
              draggedItem === index
                ? "bg-blue-200"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDrop;
