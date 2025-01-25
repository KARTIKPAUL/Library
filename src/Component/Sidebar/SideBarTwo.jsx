import React, { useState } from "react";
import { FaHome, FaList, FaPhone, FaInfoCircle } from "react-icons/fa";

function SideBarTwo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0 w-64" : "-translate-x-full w-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-lg font-semibold"></h1>
            <button
              onClick={() => setIsOpen(false)}
              className="text-red-400 text-xl hover:bg-red-500 hover:text-white p-2 rounded-full"
            >
              ✕
            </button>
          </div>
          {/* Sidebar Links */}
          <nav className="flex-1 p-4 space-y-4">
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-4 rounded-md hover:bg-gray-700"
            >
              <FaHome />
              <span>Home</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-4 rounded-md hover:bg-gray-700"
            >
              <FaList />
              <span>All Courses</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-4 rounded-md hover:bg-gray-700"
            >
              <FaPhone />
              <span>Contact Us</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 py-2 px-4 rounded-md hover:bg-gray-700"
            >
              <FaInfoCircle />
              <span>About Us</span>
            </a>
          </nav>
          {/* Buttons */}
          {isOpen && (
            <div className="p-4 flex justify-evenly">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500">
                Login
              </button>
              <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-400">
                Signup
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed top-4 left-4 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-transform ${
          isOpen ? "hidden" : "block"
        }`}
      >
        ☰
      </button>
    </div>
  );
}

export default SideBarTwo;
