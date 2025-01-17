import React from "react";
import { motion } from "framer-motion";

const ServicePageSix = () => {
  const services = [
    { title: "Service Card 1", description: "Lorem ipsum dolor sit amet.", image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg" },
    { title: "Service Card 2", description: "Lorem ipsum dolor sit amet.", image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg" },
    { title: "Service Card 3", description: "Lorem ipsum dolor sit amet.", image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg" },
  ];

  return (
    <div className="bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicePageSix;
