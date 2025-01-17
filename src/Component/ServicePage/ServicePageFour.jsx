// ServicePageFour.jsx
import React from "react";

const ServicePageFour = () => {
  const services = [
    {
      title: "Service 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      reverse: false,
    },
    {
      title: "Service 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      reverse: false,
    },
  ];

  return (
    <div className="bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 mb-12 ${
              service.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="lg:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 text-white">
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-lg leading-relaxed mb-6">{service.description}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePageFour;
