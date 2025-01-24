import React from "react";

function ButtonOne() {
    const handleClick = (buttonType) => {
        alert(`You clicked the ${buttonType} button!`);
    };

    return (
        <>
            <div className="flex flex-col items-center space-y-4 p-5">
                {/* Primary Button */}
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    onClick={() => handleClick("Primary")}
                >
                    Primary Button
                </button>

                {/* Secondary Button */}
                <button
                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
                    onClick={() => handleClick("Secondary")}
                >
                    Secondary Button
                </button>

                {/* Outline Button */}
                <button
                    className="border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
                    onClick={() => handleClick("Outline")}
                >
                    Outline Button
                </button>

                {/* Icon Button */}
                <button
                    className="flex items-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                    onClick={() => handleClick("Icon")}
                >
                    <span className="material-icons mr-2">add</span> Icon Button
                </button>

                {/* Disabled Button */}
                <button
                    className="bg-gray-300 text-gray-500 py-2 px-4 rounded cursor-not-allowed"
                    disabled
                >
                    Disabled Button
                </button>

                {/* Danger Button */}
                <button
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                    onClick={() => handleClick("Danger")}
                >
                    Danger Button
                </button>

                {/* Success Button */}
                <button
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                    onClick={() => handleClick("Success")}
                >
                    Success Button
                </button>

                {/* Gradient Button */}
                <button
                    className="bg-gradient-to-r from-purple-400 to-blue-500 text-white py-2 px-4 rounded hover:opacity-90 transition"
                    onClick={() => handleClick("Gradient")}
                >
                    Gradient Button
                </button>

                {/* Small Button */}
                <button
                    className="bg-blue-500 text-white py-1 px-3 rounded text-sm hover:bg-blue-600 transition"
                    onClick={() => handleClick("Small")}
                >
                    Small Button
                </button>

                {/* Large Button */}
                <button
                    className="bg-blue-500 text-white py-3 px-6 rounded text-lg hover:bg-blue-600 transition"
                    onClick={() => handleClick("Large")}
                >
                    Large Button
                </button>
            </div>
        </>
    );
}

export default ButtonOne;
