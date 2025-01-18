import React, { useState } from "react";

function SideBarSix() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative h-screen">
            {/* Sidebar */}
            <div
                className={`fixed bottom-0 left-0 w-full bg-gray-800 text-white transition-transform duration-300 ${
                    isOpen ? "translate-y-0" : "translate-y-full"
                }`}
            >
                <div className="p-4">
                    <button onClick={() => setIsOpen(false)} className="text-white">
                        Close
                    </button>
                </div>
                <nav className="p-4">
                    <a href="#" className="block py-2 hover:bg-gray-700">
                        Home
                    </a>
                    <a href="#" className="block py-2 hover:bg-gray-700">
                        About
                    </a>
                </nav>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 left-4 bg-gray-800 text-white p-3 rounded-full"
            >
                ☰
            </button>
        </div>
    );
}

export default SideBarSix;
