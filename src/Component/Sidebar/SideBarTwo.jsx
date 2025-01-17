import React, { useState } from "react";

function SideBarTwo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative h-screen">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ${
                    isOpen ? "w-64" : "w-0"
                } overflow-hidden`}
            >
                <div className="flex flex-col h-full">
                    <div className="p-4 flex justify-between items-center">
                        <h1 className="text-lg font-semibold">Sidebar</h1>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-gray-700 p-2 rounded-md"
                        >
                            ✕
                        </button>
                    </div>
                    <nav className="flex-1 p-4 space-y-2">
                        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                            Home
                        </a>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                            About
                        </a>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                            Services
                        </a>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                            Contact
                        </a>
                    </nav>
                </div>
            </div>

            {/* Sidebar Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed top-4 left-4 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-transform"
                >
                    ☰
                </button>
            )}
        </div>
    );
}

export default SideBarTwo;
