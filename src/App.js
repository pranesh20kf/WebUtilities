import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";// Optional: Include your Navbar component
import Dictionary from "./components/Dictionary";
import Table from "./components/Table";
import Charts from "./components/Charts";
import TodoList from "./components/TodoList/TodoList";
import Stopwatch from "./components/Stopwatch";
import DragAndDrop from "./components/DragAndDrop";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/table" element={<Table />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/draganddrop" element={<DragAndDrop />} />
      </Routes>
    </Router>
  );
}

export default App;
