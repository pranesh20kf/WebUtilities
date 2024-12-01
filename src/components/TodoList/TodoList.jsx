import React, { useState } from 'react';
import Form from './Form';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task }]);
  };

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <Form createTodo={createTodo} />
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-2 bg-gray-800 rounded shadow-md flex justify-between items-center"
          >
            {todo.task}
            <button
              onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
