import React from 'react';

const NavbarTwo = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Logo"
              className="h-10 w-10 mr-2 rounded-full"
            />
            <span className="text-yellow-500 text-xl font-bold">We Care We Share</span>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-yellow-500">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-500">
              About Us
            </a>
            <a href="#projects" className="hover:text-yellow-500">
              Our Projects
            </a>
            <a href="#events" className="hover:text-yellow-500">
              Events
            </a>
            <a href="#partners" className="hover:text-yellow-500">
              Our Partners
            </a>
            <a href="#get-involved" className="hover:text-yellow-500">
              Get Involved
            </a>
            <a href="#news" className="hover:text-yellow-500">
              News Room
            </a>
            <a href="#contact" className="hover:text-yellow-500">
              Contact
            </a>
          </div>

          {/* Search Icon */}
          <div className="hidden md:block">
            <button className="text-white hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19a8 8 0 100-16 8 8 0 000 16zm4.5-4.5L21 21"
                />
              </svg>
            </button>
            
          </div>
          

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTwo;
