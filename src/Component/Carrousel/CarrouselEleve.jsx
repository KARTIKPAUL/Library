import React, { useState } from "react";

function CarrouselEEleven() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const games = [
    {
      id: 1,
      title: "GTA VI",
      hoverImage: "https://static.digit.in/GTA-6-launch-1.png",
    },
    {
      id: 2,
      title: "Spiderman 2",
      hoverImage: "https://m2gaming.ca/wp-content/uploads/2024/02/Marvel-Spiderman-2.jpg",
    },
    {
      id: 3,
      title: "God of War",
      hoverImage: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/aqZdSwWyy9JcQ66BxHDKrky6.jpg",
    },
    {
      id: 4,
      title: "Last of Us",
      hoverImage: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/0kRqUeSBIbQzz7cen3c989c6.jpg",
    },
    {
      id: 5,
      title: "Elden Ring",
      hoverImage: "https://assets.xboxservices.com/assets/7b/54/7b54f5e4-0857-4ce3-8a18-2b8c431e8a9e.jpg?n=Elden-Ring_GLP-Page-Hero-0_1083x1222_01.jpg",
    },
  ];

  const defaultLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRudfXode1YGFnY_zS7QlwQUMchK12lM4f9LWBkzyOHiftJHCoN";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex w-[50%] h-[450px] gap-2"> 
        {games.map((game, index) => (
          <div
            key={game.id}
            className={`relative flex-1 transition-all duration-300 ${
              hoveredIndex === index ? "flex-[7]" : "flex-[1.5]"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background Image */}
            <img
              src={game.hoverImage}
              alt={game.title}
              className={`w-full h-full object-cover rounded-2xl ${
                hoveredIndex === index ? "brightness-100" : "brightness-50"
              }`} 
            />
            {/* Always Visible Logo (Positioned at Bottom Left) */}
            <div className="absolute bottom-4 left-4">
              <img
                src={defaultLogo}
                alt="logo"
                className="w-10 h-10 rounded-full"
              />
            </div>
            {/* Text Overlay (Appears after Logo on Hover) */}
            <div
              className={`absolute bottom-16 left-4 bg-black bg-opacity-50 rounded-2xl flex flex-col justify-start items-start p-4 transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`} // Increased rounding for text overlay
            >
              <span className="text-white text-lg font-semibold">
                {game.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarrouselEEleven;
