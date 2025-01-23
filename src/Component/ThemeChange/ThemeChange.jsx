import React, { useState } from 'react';

function ThemeChange() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark'); // Toggle dark mode class for the whole page
  };

  return (
    <div className="flex items-center">
      <button
        className={`rounded-full p-2 bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ${
          isDarkMode ? 'bg-blue-500' : 'bg-yellow-400'
        }`}
        onClick={toggleTheme}
      >
        <img
          src={isDarkMode ? '/moon.svg' : '/sun.svg'} // Replace with actual image paths
          alt={isDarkMode ? 'Dark Mode' : 'Light Mode'}
          className="w-5 h-5"
        />
      </button>
    </div>
  );
}

export default ThemeChange;