import React, { useState } from 'react';

const ThemeChanger = () => {
  const [isDark, setIsDark] = useState(false);

  const handleThemeChange = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark');
  };

  return (
    <div>
      <button
        className={`absolute top-10 right-10 py-4 px-6 text-lg font-bold rounded-lg cursor-pointer ${isDark ? 'bg-gray-900 text-white' : 'bg-yellow-400 text-gray-900'}`}
        onClick={handleThemeChange}
      >
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707-1.414-1.414" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
      <style>
        {`
          .dark {
            background-color: #333;
            color: #f0f0f0;
          }
        `}
      </style>
    </div>
  );
};

export default ThemeChanger;