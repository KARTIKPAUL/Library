// MainServicePage.jsx
import React, { useState } from "react";
import { ServicePageOne } from "./ServicePageOne";  // Named import
import ServicePageTwo from "./ServicePageTwo";
import ServicePageThree from "./ServicePageThree";
import ServicePageFour from "./ServicePageFour";
import ServicePageFive from "./ServicePageFive";
import ServicePageSix from "./ServicePageSix";

function MainServicePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const servicePages = [
    <ServicePageOne />,
    <ServicePageTwo />,
    <ServicePageThree />,
    <ServicePageFour />,
    <ServicePageFive />,
    <ServicePageSix />,
  ];

  return (
    <div className="bg-white min-h-screen p-8 text-black">
      {servicePages[currentPage - 1]}

      <div className="flex gap-x-2 mt-8 justify-center">
        {servicePages.map((_, index) => (
          <button
            key={index}
            className={`border px-4 py-2 rounded transition-all duration-300 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-100 text-black border-gray-300 hover:bg-blue-100"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {`Page ${index + 1}`}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainServicePage;
