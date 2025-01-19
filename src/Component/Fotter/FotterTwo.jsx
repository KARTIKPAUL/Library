import React from "react";

function FotterTwo() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
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
        <div>
          <h4 className="font-bold text-lg mb-4">Products</h4>
          <ul>
            <li>Web Tools</li>
            <li>Mobile Apps</li>
            <li>Custom Solutions</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Subscribe</h4>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded"
            />
            <button className="bg-blue-600 px-4 py-2 rounded mt-2">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default FotterTwo;
