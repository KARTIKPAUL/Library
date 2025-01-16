<<<<<<< HEAD
import { useState } from "react";
import MainNavbar from "./Component/Navbar/MainNavbar";
import TestimonialsOne from "./Component/Testimonials/TestimonialsOne";


function App() {
  

  return (
    <>
     <MainNavbar />
     <TestimonialsOne />
=======
import { useState } from 'react';
import './App.css';
import SideBarOne from "./Component/Carrousel/SideBarOne";
import SideBarTwo from './Component/Carrousel/SideBarTwo';
import SideBarThree from './Component/Carrousel/SideBarThree';
import SideBarFour from './Component/Carrousel/SideBarFour';
import SideBarFive from './Component/Carrousel/SideBarFive';
import SideBarSix from './Component/Carrousel/SideBarSix';  
import SideBarSeven from './Component/Carrousel/SideBarSeven';
import SideBarEight from './Component/Carrousel/SideBarEight';  
import SideBarNine from './Component/Carrousel/SideBarNine';
import SideBarTen from './Component/Carrousel/SideBarTen';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SideBarOne />
      <SideBarTwo />
      <SideBarThree />
      <SideBarFour />
      <SideBarFive />
      <SideBarSix /> 
      <SideBarSeven />
      <SideBarEight /> 
      <SideBarNine />
      <SideBarTen />
>>>>>>> origin/Parth
    </>
  );
}

export default App;
