<<<<<<< HEAD
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube , FaPhoneAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const NavbarOne = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Upper Section: Contact Details */}
      <div className="container mx-auto px-4 py-2 hidden md:flex justify-between items-center text-sm text-gray-600">
        <div className="text-center md:text-right flex items-center space-x-2">
          {/* Call Icon */}
          <FaPhoneAlt className="text-green-600" />
          <span>
            +91 72767 09059 &nbsp; | &nbsp; JD Road Kolkata,West Bengal - 102030
          </span>
        </div>

        <div className="font-medium flex space-x-4">
          {/* Social Media Icons */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="border-t border-gray-300"></div>

      {/* Lower Section: Logo, Centered Links, and Login Button */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="https://images.pexels.com/photos/15463116/pexels-photo-15463116.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="text-green-600 text-xl font-bold">MAKALI</h1>
            <p className="text-xs text-gray-500">Service Center</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="#home" className="hover:text-green-600">
            Home
          </a>
          <a href="#about" className="hover:text-green-600">
            About
          </a>
          <a href="#services" className="hover:text-green-600">
            Services
          </a>
          <a href="#testimonials" className="hover:text-green-600">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-green-600">
            Contact
          </a>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Login
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-800 text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <a href="#home" className="block px-4 py-2 hover:text-green-600">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:text-green-600">
            About
          </a>
          <a href="#services" className="block px-4 py-2 hover:text-green-600">
            Services
          </a>
          <a
            href="#testimonials"
            className="block px-4 py-2 hover:text-green-600"
          >
            Testimonials
          </a>
          <a href="#contact" className="block px-4 py-2 hover:text-green-600">
            Contact
          </a>
          <button className="block w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mt-2 text-center">
            Login
          </button>
        </nav>
      )}
    </header>
  );
};

export default NavbarOne;
=======
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SideBarOne() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    { id: 1, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s" },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s" },
    { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s" },
    { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFy5pH8mMYfEfCW-Vu7MP8SpqR1UpK7vU2TA&s" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg pb-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Image Slider</h2>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="px-2">
            <img
              src={slide.src}
              alt={`Slide ${slide.id}`}
              className="w-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SideBarOne;
>>>>>>> origin/Parth
