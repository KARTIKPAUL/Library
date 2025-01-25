import React, { useState } from "react";
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiCalendar,
  FiPieChart,
  FiSettings,
} from "react-icons/fi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function SideBarFive() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeMenu, setActiveMenu] = useState("");

  const toggleSidebar = () => setIsExpanded(!isExpanded);
  const handleSubMenuClick = (menu) =>
    setActiveMenu(activeMenu === menu ? "" : menu);

  const interFont = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    * {
      font-family: 'Inter', sans-serif;
    }
  `;

  return (
    <>
      <style>{interFont}</style>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div
          className={`${
            isExpanded ? "w-64" : "w-20"
          } bg-white shadow-lg transition-all duration-300 ease-in-out`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?semt=ais_hybrid"
                alt="Logo"
                className="w-8 h-8 object-contain rounded"
              />
              {isExpanded && (
                <span className="text-black font-bold text-lg">CompanyName</span>
              )}
            </div>
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={toggleSidebar}
            >
              {isExpanded ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
            </button>
          </div>

          {/* Menu */}
          <nav className="mt-4">
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 p-3 hover:bg-gray-100 cursor-pointer">
                <FiHome className="text-lg" />
                <span className={`${isExpanded ? "block" : "hidden"}`}>
                  Dashboard
                </span>
              </li>
              <li className="flex items-center space-x-2 p-3 hover:bg-gray-100 cursor-pointer">
                <FiUsers className="text-lg" />
                <span className={`${isExpanded ? "block" : "hidden"}`}>
                  Audience
                </span>
              </li>
              <li className="flex items-center justify-between p-3 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <FiFileText className="text-lg" />
                  <span className={`${isExpanded ? "block" : "hidden"}`}>
                    Posts
                  </span>
                </div>
                <span
                  className={`${
                    isExpanded ? "block" : "hidden"
                  } bg-green-100 text-green-600 px-2 py-0.5 rounded text-xs`}
                >
                  8
                </span>
              </li>
              <li className="flex items-center justify-between p-3 hover:bg-gray-100 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <FiCalendar className="text-lg" />
                  <span className={`${isExpanded ? "block" : "hidden"}`}>
                    Schedules
                  </span>
                </div>
                <span
                  className={`${
                    isExpanded ? "block" : "hidden"
                  } bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs`}
                >
                  3
                </span>
              </li>
              <li>
                <div
                  className="flex items-center justify-between p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSubMenuClick("income")}
                >
                  <div className="flex items-center space-x-2">
                    <FiPieChart className="text-lg" />
                    <span className={`${isExpanded ? "block" : "hidden"}`}>
                      Income
                    </span>
                  </div>
                  {isExpanded && (
                    <span>{activeMenu === "income" ? "-" : "+"}</span>
                  )}
                </div>
                {activeMenu === "income" && isExpanded && (
                  <ul className="pl-8 space-y-1">
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Earnings
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Refunds
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Declines
                    </li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">
                      Payouts
                    </li>
                  </ul>
                )}
              </li>
              <li className="flex items-center space-x-2 p-3 hover:bg-gray-100 cursor-pointer">
                <FiSettings className="text-lg" />
                <span className={`${isExpanded ? "block" : "hidden"}`}>
                  Promote
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default SideBarFive;
