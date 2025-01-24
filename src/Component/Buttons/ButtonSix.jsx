import React, { useState } from 'react';

function ButtonSix() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false); // Reset state after animation
    }, 500); // Adjust this time based on the animation duration
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#051215]">
      <button
        className={`relative py-3 px-12 text-lg font-semibold text-black bg-white border-2 border-white rounded-full overflow-hidden cursor-pointer z-0 transition-all duration-300 ease-in-out ${
          clicked ? 'bg-[#1E40AF] text-white' : ''
        }`}
        style={{
          fontFamily: '"Poppins", sans-serif',
          transform: clicked ? 'skew(-15deg)' : 'skew(0deg)', // Slant the button when clicked
        }}
        onClick={handleClick}
      >
        {/* Text container */}
        <div className="relative overflow-hidden block">
          <span
            className="block transition-all duration-300"
            style={{
              transition: '0.3s',
            }}
          >
            Button
          </span>
        </div>

        {/* Animated before and after divs */}
        <div
          className={`absolute top-[-103%] left-[-70%] w-full h-[102%] bg-[#000] transform skew-[30deg] transition-transform duration-300 ease ${
            clicked ? 'translate-y-[100%]' : 'translate-y-0'
          }`}
        ></div>
        <div
          className={`absolute top-[102%] left-[69%] w-full h-[102%] bg-[#000] transform skew-[30deg] transition-transform duration-300 ease ${
            clicked ? 'translate-y-[-100%]' : 'translate-y-0'
          }`}
        ></div>
      </button>
    </div>
  );
}

export default ButtonSix;
