import React from "react";

const ServiceCard = () => {
  return (
    <div className="w-64 p-5 bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out text-center">
      <img
        src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
        alt="Placeholder"
        className="w-full h-auto mb-4"
      />
      <h3 className="text-lg font-bold mb-2">Service Card</h3>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        lorem ac nisl convallis aliquet.
      </p>
    </div>
  );
};

const ServicePageOne = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Only 6 Service Cards for 2 rows */}
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export { ServicePageOne };
