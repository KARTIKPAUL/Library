import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

function FotterTwo() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Resources Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Resources</h4>
          <ul>
            <li>Documentation</li>
            <li>API Reference</li>
            <li>Tutorials</li>
            <li>FAQs</li>
            <li>Support Center</li>
          </ul>
        </div>

        {/* Products Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Products</h4>
          <ul>
            <li>Web Tools</li>
            <li>Mobile Apps</li>
            <li>Custom Solutions</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <ul>
            <li>Location: 1234 Random St, City, Country</li>
            <li>Phone: +1 (234) 567-8901</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube size={24} />
            </a>
            <a href="mailto:info@company.com" className="hover:text-gray-300">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Subscribe</h4>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded w-full"
            />
            <button className="bg-blue-600 px-4 py-2 rounded mt-2 w-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="mt-8">
  <hr className="border-blue-700" />
  <div className="text-center text-sm mt-4">
    <p>&copy; 2025 @Company Name Official | All Rights Reserved</p>
    <p className="mt-2">Designed & Developed by Company Name</p>
  </div>
</div>

    </footer>
  );
}

export default FotterTwo;
