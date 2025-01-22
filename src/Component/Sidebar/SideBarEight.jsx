import React, { useState } from "react";

function SideBarEight() {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <div className="flex h-screen">
            <div className="w-64 bg-gray-800 text-white">
                <nav>
                    <button
                        onClick={() => setActiveTab("home")}
                        className={`block w-full p-4 hover:bg-gray-700 ${
                            activeTab === "home" && "bg-gray-700"
                        }`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => setActiveTab("about")}
                        className={`block w-full p-4 hover:bg-gray-700 ${
                            activeTab === "about" && "bg-gray-700"
                        }`}
                    >
                        About
                    </button>
                </nav>
                <div className="p-4 text-center">
                    {activeTab === "home" && <p>Home Content</p>}
                    {activeTab === "about" && <p>About Content</p>}
                </div>
            </div>
        </div>
    );
}

export default SideBarEight;
