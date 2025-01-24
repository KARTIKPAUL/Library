import { useState } from "react";
import LoginPageOne from "./LoginPageOne";
import LoginPageTwo from "./LoginPageTwo";
import LoginPageThree from "./LoginPageThree";
import LoginPageFour from "./LoginPageFour";
import LoginPageFive from "./LoginPageFive";


function MainLogin() {
  const [page, setPage] = useState(1);

  const loginPages = [
    <LoginPageOne />,
    <LoginPageTwo />,
    <LoginPageThree />,
    <LoginPageFour />,
    <LoginPageFive />,
    
  ];

  console.log("Current page:", page);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Render the currently selected login page */}
      <div className="w-full h-full">{loginPages[page - 1]}</div>

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-x-2 mt-4">
        {[...Array(loginPages.length)].map((_, index) => (
          <button
            key={index}
            className={`border p-2 rounded ${
              page === index + 1
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainLogin;
