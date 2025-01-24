import React, { useState } from "react";
import SideBarOne from "./SideBarOne";
import SideBarTwo from "./SideBarTwo";
import SideBarThree from "./SideBarThree";
import SideBarFour from "./SideBarFour";
import SideBarFive from "./SideBarFive";
// import SideBarSix from "./SideBarSix";
import SideBarSeven from "./SideBarSeven";
import SideBarEight from "./SideBarEight";

function MainSideBar() {
  const [sidebar, setSidebar] = useState(1); // Default to SidebarOne

  // Array of sidebar components
  const sidebars = [
    <SideBarOne />,
    <SideBarTwo />,
    <SideBarThree />,
    <SideBarFour />,
    <SideBarFive />,
    // <SideBarSix />,
    <SideBarSeven />,
    <SideBarEight />,
  ];

  return (
    <div className="h-screen flex flex-col">
      {/* Sidebar Toggle Buttons (centered above content) */}
      <div className="flex justify-center items-center gap-2 mt-4 mb-4">
        {sidebars.map((_, index) => (
          <button
            key={index}
            className={`border p-2 rounded ${
              sidebar === index + 1 ? "bg-blue-500 text-white" : "bg-white text-black"
            }`}
            onClick={() => setSidebar(index + 1)}
          >
            Sidebar {index + 1}
          </button>
        ))}
      </div>

      {/* Render the selected sidebar */}
      <div className="w-full flex-grow">{sidebars[sidebar - 1]}</div>
    </div>
  );
}

export default MainSideBar;
