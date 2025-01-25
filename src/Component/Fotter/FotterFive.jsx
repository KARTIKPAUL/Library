import React from "react";
import {
  FaInstagram,
  FaGoogle,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

function FotterFive() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="text-center mb-8">
          {/* Company Name and Motto */}
          <h1 className="text-lg font-bold">Company Name</h1>
          <p className="mt-2 text-sm text-gray-400">
            Empowering users with secure access to authentic digital resources and services.
          </p>

          {/* Follow Us */}
          <div className="mt-4">
            <h2 className="text-sm font-semibold mb-4">FOLLOW US</h2>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-blue-500 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-purple-500 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-blue-700 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-red-500 hover:text-white">
                <FaYoutube size={24} />
              </a>
              <a href="#" className="text-yellow-500 hover:text-white">
                <FaGoogle size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Left: Links */}
          <div className="text-center md:text-left md:w-1/3">
            <h2 className="text-sm font-semibold mb-4">QUICK LINKS</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white block">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white block">
                  Need Help
                </a>
              </li>
            </ul>
          </div>

          {/* Middle: Generic Text */}
          <div className="text-center md:w-1/3">
            <p className="text-gray-400">
              "Your one-stop destination for all authentic digital resources."
            </p>
            <p className="text-gray-400 mt-2">
              "We strive to empower and secure your digital journey."
            </p>
          </div>

          {/* Right: Placeholder Text */}
          <div className="text-center md:text-right md:w-1/3">
            <h2 className="text-sm font-semibold mb-4">ABOUT</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          {/* Horizontal Line */}
          <hr className="border-gray-700 mb-4" />

          {/* Copyright and Terms */}
          <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
            <p className="text-sm text-gray-400">
              © 2024, Website maintained by Company Name
            </p>
            <div className="flex gap-4 justify-center md:justify-end text-gray-400 mt-2 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FotterFive;
