import React, { useState } from 'react';

const NavbarFour = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav ClassName="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
    <div ClassName="max-w-7xl mx-auto px-4">
        <div ClassName="flex justify-between items-center h-16">
            
            <div ClassName="flex-shrink-0 flex items-center">
                <a href="/" ClassName="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                    Logo
                </a>
            </div>

           
            <div ClassName="hidden md:flex items-center space-x-8">
                <a href="#" ClassName="text-gray-600 hover:text-indigo-600 px-3 py-2 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all">Home</a>
                <a href="#" ClassName="text-gray-600 hover:text-indigo-600 px-3 py-2 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all">About</a>
                <a href="#" ClassName="text-gray-600 hover:text-indigo-600 px-3 py-2 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all">Services</a>
                <a href="#" ClassName="text-gray-600 hover:text-indigo-600 px-3 py-2 transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all">Contact</a>
            </div>

           
            <div ClassName="md:hidden flex items-center">
                <button ClassName="mobile-menu-button outline-none" onclick="toggleMenu()">
                    <svg ClassName="w-6 h-6 text-gray-500 hover:text-indigo-600 transition-colors duration-300" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

       
        <div ClassName="mobile-menu hidden md:hidden transition-all duration-300 ease-in-out">
            <div ClassName="px-2 pt-2 pb-3 space-y-1">
                <a href="#" ClassName="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-50">Home</a>
                <a href="#" ClassName="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-50">About</a>
                <a href="#" ClassName="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-50">Services</a>
                <a href="#" ClassName="block text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-50">Contact</a>
            </div>
        </div>
    </div>
</nav>


  );
};

export default NavbarFour;
