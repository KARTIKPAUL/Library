import React from "react";

function ButtonFive() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <button
                className={`
                    relative px-8 py-4 text-lg font-semibold uppercase tracking-wide rounded-md 
                    text-gray-200 bg-gray-800 shadow-[0_0_60px_hsl(232,85%,69%,0.6)] 
                    cursor-pointer transition-all duration-500 ease-in-out 
                    hover:text-blue-900 hover:bg-gradient-to-r hover:from-[#9cecfb] hover:via-[#65c7f7] hover:to-[#0052d4] 
                    active:scale-90
                `}
                style={{
                    WebkitBoxReflect:
                        "below 10px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))",
                }}
            >
                Hover Me
            </button>
        </div>
    );
}

export default ButtonFive;
