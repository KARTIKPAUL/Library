import { useState } from "react";
import MainNavbar from "./Component/Navbar/MainNavbar";
import TestimonialsOne from "./Component/Testimonials/TestimonialsOne";
import MainLogin from "./Component/LoginPage/MainLoginPage";

function App() {
  console.log("Rendering App component...");

  return (
    <div>
      <MainLogin />
    </div>
  );
}

export default App;