import React from "react";

function FotterFour() {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div>
          <h4 className="font-bold text-lg mb-4">Eco-Friendly Initiatives</h4>
          <ul>
            <li>Recycling Program</li>
            <li>Carbon Neutrality</li>
            <li>Water Conservation</li>
            <li>Solar Energy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Get Involved</h4>
          <ul>
            <li>Volunteer</li>
            <li>Join Us</li>
            <li>Donate</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FotterFour;
