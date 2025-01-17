import React, { useState } from "react";

function SideBarSeven() {
    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex h-screen">
            <div
                className={`bg-gray-800 text-white transition-all duration-300 ${
                    isOpen ? "w-64" : "w-16"
                }`}
            >
                <div className="p-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? "←" : "☰"}
                    </button>
                </div>
                <nav>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="block w-full text-left p-4 hover:bg-gray-700"
                    >
                        Menu
                    </button>
                    {menuOpen && (
                        <div className="ml-4">
                            <a href="#" className="block py-2 hover:bg-gray-700">
                                Submenu 1
                            </a>
                            <a href="#" className="block py-2 hover:bg-gray-700">
                                Submenu 2
                            </a>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
}

export default SideBarSeven;
