import React, { useState } from "react";

function SideBarFive() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen">
            <div
                className={`absolute top-4 left-4 bg-gray-800 text-white rounded-lg shadow-lg ${
                    isOpen ? "p-4 w-64" : "p-2 w-16"
                } transition-all duration-300`}
            >
                <button onClick={() => setIsOpen(!isOpen)} className="w-full text-center">
                    {isOpen ? "✕" : "☰"}
                </button>
                {isOpen && (
                    <nav className="mt-4">
                        <a href="#" className="block p-2 hover:bg-gray-700">
                            Home
                        </a>
                        <a href="#" className="block p-2 hover:bg-gray-700">
                            About
                        </a>
                    </nav>
                )}
            </div>
        </div>
    );
}

export default SideBarFive;
