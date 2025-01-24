import React from "react";

function ButtonTwo() {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <button className="relative group">
                {/* Aura/Glowing effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 group-hover:blur-xl transition duration-300 ease-in-out"></span>
                
                {/* Main button */}
                <span className="relative bg-black text-purple-500 px-6 py-3 rounded-full font-medium border-2 border-purple-500 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 group-hover:border-transparent transition duration-300 ease-in-out">
                    BUTTON
                </span>
            </button>
        </div>
    );
}

export default ButtonTwo;
