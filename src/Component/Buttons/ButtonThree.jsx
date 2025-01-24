import React from "react";

function ButtonThree() {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <button className="relative px-20 py-5 bg-red-500 text-white font-bold uppercase tracking-wider rounded-md overflow-hidden group">
                {/* Background Span (for hover animation) */}
                <span className="absolute top-0 left-0 w-[120%] h-[110%] bg-gray-900 transform -translate-x-[105%] skew-x-[-10deg] transition-all group-hover:translate-x-[-5%] group-hover:skew-x-[-10deg]"></span>

                {/* Button Text */}
                <a href="#" className="relative z-10 text-xl">{`Play Free`}</a>
                
                {/* Border Effects (before and after pseudo elements) */}
                <span className="absolute top-[-10%] left-[-2.5%] w-[105%] h-[50%] border-b border-gray-500 z-[-1]"></span>
                <span className="absolute bottom-[-10%] left-[-2.5%] w-[105%] h-[50%] border-t border-gray-500 z-[-1]"></span>
            </button>
        </div>
    );
}

export default ButtonThree;
