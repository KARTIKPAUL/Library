import React, { useState } from "react";
import FotterOne from "./FotterOne";
import FotterTwo from "./FotterTwo";
import FotterThree from "./FotterThree";
import FotterFour from "./FotterFour";
import FotterFive from "./FotterFive";
import FotterSix from "./FotterSix";
import FotterSeven from "./FotterSeven";
import FotterEight from "./FotterEight";
import FotterNine from "./FotterNine";

function MainFotter() {
  const [footer, setFooter] = useState(1); // Default footer

  const footers = [
    <FotterOne />,
    <FotterTwo />,
    <FotterThree />,
    <FotterFour />,
    <FotterFive />,
    <FotterSix />,
    <FotterSeven />,
    <FotterEight />,
    <FotterNine />,
  ];

  return (
    <>
      {footers[footer - 1]}

      <div className="flex gap-2 justify-center mt-4">
        {footers.map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              footer === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFooter(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default MainFotter;
