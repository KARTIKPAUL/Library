import React from 'react';

const TestimonialsTwo = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <div className="flex items-center space-x-6">
        {/* Profile Image */}
        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="https://images.pexels.com/photos/7026424/pexels-photo-7026424.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace this with the actual image URL
            alt="Person"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text Content */}
        <div>
          <p className="text-lg italic mb-4">
            “Tailwind CSS is the only framework that I've seen scale on large teams. It's easy to customize, adapts to any design, and the build size is tiny.”
          </p>
          <p className="font-bold text-blue-400">Sarah Dayan</p>
          <p className="text-sm text-gray-400">Staff Engineer, Algolia</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsTwo;
