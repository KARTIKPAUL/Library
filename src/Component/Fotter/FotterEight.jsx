import React from "react";

function FotterEight() {
  return (
    <footer className="bg-yellow-800 text-black py-10">
      <div className="container mx-auto text-center">
        <h4 className="font-bold text-lg mb-4">Newsletter Signup</h4>
        <form>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
      </div>
    </footer>
  );
}

export default FotterEight;
