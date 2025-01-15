import { useState } from "react";
import "./App.css";
import NavbarOne from "./Component/Navbar/NavbarOne";
import NavBarTwo from "./Component/Navbar/NavbarTwo";
import NavbarThree from "./Component/Navbar/NavbarThree";
import NavbarFour from "./Component/Navbar/NavbarFour";
import NavbarFive from "./Component/Navbar/NavbarFive";
import NavbarSix from "./Component/Navbar/NavbarSix";
import NavbarSeven from "./Component/Navbar/NavbarSeven";
import NavbarEight from "./Component/Navbar/NavbarEight";

function App() {
  const [navbar, setNavbar] = useState(1); // default to show NavbarOne

  // Create an array of navbar components
  const navbars = [
    <NavbarOne />,
    <NavBarTwo />,
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

export default App;
