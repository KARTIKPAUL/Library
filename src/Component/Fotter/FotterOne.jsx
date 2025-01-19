import React from "react";

function FotterOne() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 px-4">
        {/* Company Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4 whitespace-nowrap">
            Company
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4 whitespace-nowrap">
            Our Services
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                abc-1
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                abc-2
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                abc-3
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                xyz-1
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                xyz-2
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4 whitespace-nowrap">
            Support
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4 whitespace-nowrap">
            Contact Us
          </h4>
          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            consectetur.
          </p>
          <p className="text-sm mb-2">000000000000</p>
          <p className="text-sm">✉️ support@example</p>
        </div>

        {/* Find Us Section */}
        <div>
          <h4 className="font-semibold text-lg mb-4 whitespace-nowrap">
            Find Us
          </h4>
          <img
            src="https://beautyrepublicfdl.com/wp-content/uploads/2020/06/placeholder-image.jpg"
            alt="Placeholder"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </footer>
  );
}

export default FotterOne;
