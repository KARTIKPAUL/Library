import React from "react";

function FotterThree() {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-4">About Us</h4>
          <p>
            We are committed to providing high-quality services that help your
            business grow and succeed.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
          <p>Email: example@example.com</p>
          <p>Phone: +1 800 555 0199</p>
        </div>
      </div>
    </footer>
  );
}

export default FotterThree;
