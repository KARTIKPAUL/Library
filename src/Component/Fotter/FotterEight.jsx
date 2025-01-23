import React from "react";

function FotterEight() {
  return (
    <footer className="bg-yellow-800 text-black py-10">
      <div className="container mx-auto text-center">
        <h4 className="font-bold text-lg mb-4">Newsletter Signup</h4>
        <form>
          <input type="text" className="px-10 py-2 rounded-xl" placeholder="Enter your email.." />
          <button className="text-xl bg-black text-white py-2 px-5 ml-5 rounded-xl">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}

export default FotterEight;
