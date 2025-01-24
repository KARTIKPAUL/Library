import React, { useState, useEffect } from "react";

function CarrouselNine() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Unique aesthetic landscape images
  const slides = [
    "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
    "https://images.unsplash.com/photo-1521295121783-8a321d551ad2",
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
    "https://images.unsplash.com/photo-1562564055-71e051d33c19",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    "https://images.unsplash.com/photo-1491841651911-c44c30c34548",
  ];
  
  

  const chunkSize = 3; // Number of slides to display at once
  const numChunks = Math.ceil(slides.length / chunkSize);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % numChunks);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [numChunks]);

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-center text-2xl font-bold text-blue-600 mb-8">
        Landscapes
      </h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {Array.from({ length: numChunks }).map((_, chunkIndex) => (
            <div
              key={chunkIndex}
              className="flex justify-between min-w-full px-4 space-x-4"
            >
              {slides
                .slice(chunkIndex * chunkSize, (chunkIndex + 1) * chunkSize)
                .map((slide, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-lg flex-grow"
                  >
                    <img
                      src={slide}
                      alt={`Landscape ${chunkIndex * chunkSize + index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: numChunks }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CarrouselNine;
