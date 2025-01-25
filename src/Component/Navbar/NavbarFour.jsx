import React from "react";

const NavbarFour = () => {
  return (
    <header className="w-full">
      {/* Top Section */}
      <div className="bg-[#001F5C] text-white py-2 px-4 flex justify-between items-center">
        {/* Left Logos */}
        <div className="flex items-center space-x-4">
        <img
            src="https://images.pexels.com/photos/7702229/pexels-photo-7702229.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Women's Premier League"
            className="h-8 w-auto rounded-full"
          />
          <img
            src="https://images.pexels.com/photos/9420724/pexels-photo-9420724.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="BCCI Logo"
            className="h-8 w-auto rounded-full"
          />
          
        </div>

        {/* Right Social Media Links */}
        <div className="flex items-center space-x-4">
          <span>Follow Us</span>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition-colors"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#17408B] text-white py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Left Section: Links */}
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-gray-300 text-sm font-semibold uppercase"
            >
              Matches
            </a>
            <a
              href="#"
              className="hover:text-gray-300 text-sm font-semibold uppercase"
            >
              Videos
            </a>
            <a
              href="#"
              className="hover:text-gray-300 text-sm font-semibold uppercase"
            >
              Stats
            </a>
            <a
              href="#"
              className="hover:text-gray-300 text-sm font-semibold uppercase"
            >
              Points Table
            </a>
            <a
              href="#"
              className="hover:text-gray-300 text-sm font-semibold uppercase"
            >
              Teams
            </a>
            <a
              href="#"
              className="hover:text-gray-300 text-sm font-semibold uppercase"
            >
              Auction
            </a>
            <a
              href="#"
              className="hover:text-gray-300 text-sm font-semibold uppercase"
            >
              News
            </a>
            <a
              href="#"
              className="hover:text-gray-300 text-sm font-semibold uppercase"
            >
              More
            </a>
          </div>

          {/* Right Section: Extras */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-gray-300 text-sm"
            >
              <i className="fas fa-gavel"></i>
              <span>Auction Fan Poll</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-gray-300 text-sm"
            >
              <i className="fas fa-trophy"></i>
              <span>Viewers Choice</span>
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors text-sm"
            >
              <i className="fas fa-search"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarFour;
