import React, { useState } from "react";

function ButtonFour() {
  const [isChecked, setIsChecked] = useState(false);

  // Handle the toggle switch change
  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="relative w-24 h-12">
        <label
          htmlFor="checkbox"
          className={`absolute w-full h-full bg-[#183153] rounded-full cursor-pointer transition-all ${
            isChecked ? "bg-[#69b0e7]" : ""
          }`}
        >
          <input
            id="checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleToggle}
            className="absolute opacity-0 w-full h-full"
          />
          <span
            className={`absolute top-2 left-2 w-8 h-8 rounded-full bg-[#183153] transition-all ${
              isChecked ? "transform translate-x-[50px] bg-[#ffd43b]" : ""
            }`}
          ></span>
        </label>
      </div>
    </div>
  );
}

export default ButtonFour;
