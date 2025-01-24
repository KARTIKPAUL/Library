import React from "react";

function FotterFour() {
  return (
    <div className="w-full">
      {/* Back to Top Section */}
      <div className="bg-gray-800 text-center py-4">
        <button className="text-white text-sm hover:underline">Back to top</button>
      </div>

      {/* Main Footer Section */}
      <div className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h5 className="text-white font-semibold mb-4">Get to Know Us</h5>
              <ul className="space-y-2">
                <li className="hover:text-gray-400 cursor-pointer">About Amazon</li>
                <li className="hover:text-gray-400 cursor-pointer">Careers</li>
                <li className="hover:text-gray-400 cursor-pointer">Press Releases</li>
                <li className="hover:text-gray-400 cursor-pointer">Amazon Science</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h5 className="text-white font-semibold mb-4">Connect with Us</h5>
              <ul className="space-y-2">
                <li className="hover:text-gray-400 cursor-pointer">Facebook</li>
                <li className="hover:text-gray-400 cursor-pointer">Twitter</li>
                <li className="hover:text-gray-400 cursor-pointer">Instagram</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h5 className="text-white font-semibold mb-4">Make Money with Us</h5>
              <ul className="space-y-2">
                <li className="hover:text-gray-400 cursor-pointer">Sell on Amazon</li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Sell under Amazon Accelerator
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Protect and Build Your Brand
                </li>
                <li className="hover:text-gray-400 cursor-pointer">Amazon Global Selling</li>
                <li className="hover:text-gray-400 cursor-pointer">Supply to Amazon</li>
                <li className="hover:text-gray-400 cursor-pointer">Become an Affiliate</li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Fulfillment by Amazon
                </li>
                <li className="hover:text-gray-400 cursor-pointer">Advertise Your Products</li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Amazon Pay on Merchants
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h5 className="text-white font-semibold mb-4">Let Us Help You</h5>
              <ul className="space-y-2">
                <li className="hover:text-gray-400 cursor-pointer">Your Account</li>
                <li className="hover:text-gray-400 cursor-pointer">Returns Centre</li>
                <li className="hover:text-gray-400 cursor-pointer">
                  Recalls and Product Safety Alerts
                </li>
                <li className="hover:text-gray-400 cursor-pointer">
                  100% Purchase Protection
                </li>
                <li className="hover:text-gray-400 cursor-pointer">Amazon App Download</li>
                <li className="hover:text-gray-400 cursor-pointer">Help</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Secondary Section */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          {/* Company Logo */}
          <div className="text-white text-lg font-semibold">Company Logo</div>

          {/* Language and Region Buttons */}
          <div className="flex space-x-4">
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
              English
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
              India
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Links Section */}
      <div className="bg-gray-700 text-gray-400 py-6">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <span className="hover:text-gray-300 cursor-pointer">AbeBooks</span>
          <span className="hover:text-gray-300 cursor-pointer">Amazon Web Services</span>
          <span className="hover:text-gray-300 cursor-pointer">Shopbop</span>
          <span className="hover:text-gray-300 cursor-pointer">Audible</span>
          <span className="hover:text-gray-300 cursor-pointer">Prime Now</span>
          <span className="hover:text-gray-300 cursor-pointer">IMDb</span>
          <span className="hover:text-gray-300 cursor-pointer">Amazon Prime Music</span>
        </div>
      </div>
    </div>
  );
}

export default FotterFour;
