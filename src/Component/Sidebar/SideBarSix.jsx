import React, { useState } from "react";

function SideBarSix() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen">
      {/* Sidebar */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-gray-800 text-white transition-transform duration-300 z-20 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <nav className="p-4">
          {/* Close Icon */}
          <a
            href="#"
            className="block py-2 hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </a>
          <a href="#" className="block py-2 hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block py-2 hover:bg-gray-700">
            About
          </a>
        </nav>
      </div>

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 left-4 bg-gray-800 text-white p-3 rounded-full z-30"
        >
          ☰
        </button>
      )}
    </div>
  );
}

export default SideBarSix;
