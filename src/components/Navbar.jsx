import React from "react";

function Navbar() {
  return (
    <nav className="bg-yellow-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-white text-2xl font-bold">
          Application
        </a>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="/dictionary" className="text-white hover:text-gray-200">
            Dictionary
          </a>
          <a href="/table" className="text-white hover:text-gray-200">
            Table
          </a>
          <a href="/charts" className="text-white hover:text-gray-200">
            Charts
          </a>
          <a href="/todolist" className="text-white hover:text-gray-200">
            TodoList
          </a>
          <a href="/stopwatch" className="text-white hover:text-gray-200">
            Stopwatch
          </a>
          <a href="/draganddrop" className="text-white hover:text-gray-200">
            DragAndDrop
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          id="menu-button"
          onClick={() =>
            document
              .getElementById("mobile-menu")
              .classList.toggle("hidden")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className=" absolute top-16 left-0 w-full bg-yellow-500 flex flex-col items-center space-y-4 md:hidden"
        >
          <a href="/" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="/dictionary" className="text-white hover:text-gray-200">
            Dictionary
          </a>
          <a href="/table" className="text-white hover:text-gray-200">
            Table
          </a>
          <a href="/charts" className="text-white hover:text-gray-200">
            Charts
          </a>
          <a href="/todolist" className="text-white hover:text-gray-200">
            TodoList
          </a>
          <a href="/stopwatch" className="text-white hover:text-gray-200">
            Stopwatch
          </a>
          <a href="/draganddrop" className="text-white hover:text-gray-200">
            DragAndDrop
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
