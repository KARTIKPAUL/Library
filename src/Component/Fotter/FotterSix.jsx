import React from "react";

function FotterSix() {
  return (
    <footer className="bg-purple-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-bold text-lg mb-4">Community</h4>
          <ul>
            <li>Events</li>
            <li>Forums</li>
            <li>Groups</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Partnerships</h4>
          <ul>
            <li>Affiliate Program</li>
            <li>Collaboration Opportunities</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FotterSix;
