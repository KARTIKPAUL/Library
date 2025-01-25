import React, { useState } from "react";
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaFilm,
  FaEnvelope,
  FaHeart,
  FaPlus,
  FaUserCircle,
  FaCogs,
  FaComments,
  FaEllipsisH,
} from "react-icons/fa";

function SideBarOne() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`flex flex-col h-screen bg-black text-white transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Header Section */}
        <div className="flex items-center justify-center h-16 text-lg font-bold border-b border-gray-800">
          {isOpen && <span className="text-white text-xl font-sans">Instagram</span>}
          <button
            className="absolute left-4 text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "←" : "→"}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-grow overflow-y-auto">
          <ul className="space-y-2 p-4">
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <FaHome className="text-xl" />
                {isOpen && <span className="ml-4 font-light">Home</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <FaSearch className="text-xl" />
                {isOpen && <span className="ml-4 font-light">Search</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <FaCompass className="text-xl" />
                {isOpen && <span className="ml-4 font-light">Explore</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <FaFilm className="text-xl" />
                {isOpen && <span className="ml-4 font-light">Reels</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <FaEnvelope className="text-xl" />
                {isOpen && <span className="ml-4 font-light">Messages</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <FaHeart className="text-xl" />
                {isOpen && <span className="ml-4 font-light">Notifications</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <FaPlus className="text-xl" />
                {isOpen && <span className="ml-4 font-light">Create</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <FaUserCircle className="text-xl" />
                {isOpen && <span className="ml-4 font-light">Profile</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <FaCogs className="text-xl" />
                {isOpen && <span className="ml-4 font-light">AI Studio</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <FaComments className="text-xl" />
                {isOpen && <span className="ml-4 font-light">Threads</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <FaEllipsisH className="text-xl" />
                {isOpen && <span className="ml-4 font-light">More</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        <h1 className="text-2xl font-semibold">Welcome to Instagram Clone!</h1>
        <p className="mt-2 text-gray-700">
          This is the main content area. The sidebar on the left mimics Instagram's style.
        </p>
      </div>
    </div>
  );
}

export default SideBarOne;
