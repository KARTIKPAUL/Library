import { useState } from "react";
import NavbarOne from './NavbarOne'
import NavbarTwo from "./NavbarTwo";
import NavbarThree from "./NavbarThree"
import NavbarFour from "./NavbarFour";
import NavbarFive from "./NavbarFive"
import NavbarSix from "./NavbarSix"
import NavbarSeven from "./NavbarSeven"
import NavbarEight from "./NavbarEight";



function MainNavbar() {
  const [navbar, setNavbar] = useState(1); // default to show NavbarOne

  // Create an array of navbar components
  const navbars = [
    <NavbarOne />,
    <NavbarTwo />,
    <NavbarThree />,
    <NavbarFour />,
    <NavbarFive />,
    <NavbarSix />,
    <NavbarSeven />,
    <NavbarEight />
    
  ];

  return (
    <>
      {/* Display the selected navbar based on state */}
      {navbars[navbar - 1]}

      {/* Buttons to switch between navbars */}
      <div className="flex gap-x-2 mt-4">
        {[...Array(navbars.length)].map((_, index) => (
          <button
            key={index}
            className={`border p-2 rounded ${navbar === index + 1 ? "bg-blue-500 text-white" : "bg-white text-black"}`}
            onClick={() => setNavbar(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default MainNavbar;
