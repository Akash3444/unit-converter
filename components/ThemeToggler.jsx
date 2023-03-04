import React, { useState } from 'react';
import Moon from './icons/Moon';
import Sun from './icons/Sun';

const ThemeToggler = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const isDarkTheme = prevTheme === 'dark';
      const newTheme = isDarkTheme ? 'light' : 'dark';
      document.querySelector('html').classList[isDarkTheme ? 'remove' : 'add']('dark');

      return newTheme;
    });
  };

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer flex items-center h-8 w-14 rounded-full bg-white dark:bg-dark-800 px-1"
    >
      <button
        className="h-[26px] w-[26px] flex items-center justify-center rounded-full bg-gray-300 dark:bg-dark-700 text-gray-800 dark:text-dark-200 transition-transform duration-500"
        style={{
          transform: `translateX(${theme === 'dark' ? '20px' : 0}) rotate(${
            theme === 'dark' ? 360 : 0
          }deg)`,
        }}
      >
        {theme === 'light' ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};

export default ThemeToggler;
