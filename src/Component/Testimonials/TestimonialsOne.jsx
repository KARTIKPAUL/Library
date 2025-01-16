import React from 'react';

const TestimonialOne = () => {
  return (
    <div className="bg-gray-900 text-white max-w-sm mx-auto p-8 rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src="https://images.pexels.com/photos/7026424/pexels-photo-7026424.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace this with the actual image URL
            alt="Person"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-center text-lg italic mb-6">
          “Tailwind CSS is the only framework that I've seen scale on large teams. It's easy to customize, adapts to any design, and the build size is tiny.”
        </p>
        <p className="text-center font-bold text-blue-400">Sarah Dayan</p>
        <p className="text-center text-sm text-gray-400">Staff Engineer, Algolia</p>
      </div>
    </div>
  );
};

export default TestimonialOne;
