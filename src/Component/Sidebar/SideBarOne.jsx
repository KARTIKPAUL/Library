import React, { useState } from "react";

function SideBarOne() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`flex flex-col h-screen bg-gray-800 text-white transition-all duration-300 ${
                    isOpen ? "w-64" : "w-16"
                }`}
            >
                {/* Header Section */}
                <div className="flex items-center justify-center h-16 bg-gray-900 text-lg font-bold border-b border-gray-700">
                    <button
                        className="absolute left-2 p-2 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "←" : "→"}
                    </button>
                    {isOpen && <span>My Sidebar</span>}
                </div>

                {/* Navigation Items */}
                <nav className="flex-grow overflow-y-auto">
                    <ul className="space-y-2 p-4">
                        <li className="group">
                            <a
                                href="#"
                                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                <span className={`ml-2 ${!isOpen && "hidden"}`}>Field 1</span>
                            </a>
                        </li>
                        <li className="group">
                            <a
                                href="#"
                                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                <span className={`ml-2 ${!isOpen && "hidden"}`}>Field 2</span>
                            </a>
                        </li>
                        <li className="group">
                            <a
                                href="#"
                                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                <span className={`ml-2 ${!isOpen && "hidden"}`}>Field 3</span>
                            </a>
                        </li>
                        <li className="group">
                            <a
                                href="#"
                                className="flex items-center p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                <span className={`ml-2 ${!isOpen && "hidden"}`}>Field 4</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Footer Section */}
                <div className="h-16 flex items-center justify-center bg-gray-900 border-t border-gray-700">
                    {isOpen && <span>© 2025 Sidebar</span>}
                </div>
            </div>
        </div>
    );
}

export default SideBarOne;