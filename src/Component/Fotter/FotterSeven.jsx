import React from "react";

function FotterSeven() {
  return (
    <footer className="bg-red-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-lg mb-4">Get Our App</h4>
          <p>Available on Google Play and App Store.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Why Choose Us?</h4>
          <p>Top-notch service quality at competitive prices.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Customer Reviews</h4>
          <p>"The best experience I've ever had!"</p>
        </div>
      </div>
    </footer>
  );
}

export default FotterSeven;
