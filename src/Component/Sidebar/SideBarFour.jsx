import React, { useState } from "react";

function SideBarFour() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`flex flex-col bg-gray-800 text-white h-screen transition-all duration-300 ${
                    isOpen ? "w-64" : "w-16"
                }`}
            >
                <div className="h-16 flex items-center justify-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 bg-gray-700 rounded-full"
                    >
                        {isOpen ? "☰" : "☰"}
                    </button>
                </div>
                <nav className="flex-grow">
                    <a href="#" className="flex items-center p-4 hover:bg-gray-700">
                        <span className="material-icons">→</span>
                        {isOpen && <span className="ml-2">Home</span>}
                    </a>
                    <a href="#" className="flex items-center p-4 hover:bg-gray-700">
                        <span className="material-icons">→</span>
                        {isOpen && <span className="ml-2">About</span>}
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default SideBarFour;
