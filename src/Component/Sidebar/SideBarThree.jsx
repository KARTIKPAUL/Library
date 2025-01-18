import React, { useState } from "react";

function SideBarThree() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sidebar */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 ${
                    isOpen ? "block" : "hidden"
                }`}
                onClick={() => setIsOpen(false)}
            ></div>
            <div
                className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="p-4">
                    <h1 className="text-lg font-semibold">Sliding Sidebar</h1>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:bg-gray-700 p-2 rounded-md"
                    >
                        ✕
                    </button>
                </div>
                <nav className="p-4 space-y-2">
                    <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                        Home
                    </a>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                        About
                    </a>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-md">
                        Contact
                    </a>
                </nav>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-4 left-4 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700"
            >
                ☰
            </button>
        </>
    );
}

export default SideBarThree;
