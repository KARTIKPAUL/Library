import React, { useState } from "react";
import {
  FaUserFriends,
  FaClock,
  FaBookmark,
  FaUsers,
  FaVideo,
  FaStore,
  FaNewspaper,
  FaCalendarAlt,
  FaChartBar,
  FaEllipsisH,
} from "react-icons/fa";

function SideBarThree() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-300">
      {/* Sidebar */}
      <div
        className={`flex flex-col h-screen bg-gray-800 transition-transform duration-300 shadow-lg ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Header Section */}
        <div className="flex items-center justify-between h-16 px-4 bg-gray-700 text-white">
          {isOpen && <h1 className="text-xl font-semibold">Facebook</h1>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:bg-gray-600 rounded-full"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-grow overflow-y-auto">
          <ul className="space-y-2 p-4">
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md hover:bg-gray-700"
              >
                <FaUserFriends className="text-2xl text-blue-400" />
                {isOpen && <span className="ml-4 text-lg">Find Friends</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md hover:bg-gray-700"
              >
                <FaClock className="text-2xl text-blue-400" />
                {isOpen && <span className="ml-4 text-lg">Memories</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md hover:bg-gray-700"
              >
                <FaBookmark className="text-2xl text-purple-400" />
                {isOpen && <span className="ml-4 text-lg">Saved</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md hover:bg-gray-700"
              >
                <FaUsers className="text-2xl text-blue-400" />
                {isOpen && <span className="ml-4 text-lg">Groups</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md hover:bg-gray-700"
              >
                <FaVideo className="text-2xl text-teal-400" />
                {isOpen && <span className="ml-4 text-lg">Videos</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md hover:bg-gray-700"
              >
                <FaStore className="text-2xl text-green-400" />
                {isOpen && <span className="ml-4 text-lg">Marketplace</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md hover:bg-gray-700"
              >
                <FaNewspaper className="text-2xl text-red-400" />
                {isOpen && <span className="ml-4 text-lg">Feeds</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md hover:bg-gray-700"
              >
                <FaCalendarAlt className="text-2xl text-orange-400" />
                {isOpen && <span className="ml-4 text-lg">Events</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md hover:bg-gray-700"
              >
                <FaChartBar className="text-2xl text-blue-300" />
                {isOpen && <span className="ml-4 text-lg">Ads Manager</span>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 rounded-md hover:bg-gray-700"
              >
                <FaEllipsisH className="text-2xl text-gray-400" />
                {isOpen && <span className="ml-4 text-lg">See More</span>}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-semibold text-white">
          Welcome to the New Facebook Sidebar!
        </h1>
        <p className="mt-2 text-gray-400">
          This is a refreshed design with a dark theme and larger font sizes.
        </p>
      </div>
    </div>
  );
}

export default SideBarThree;
