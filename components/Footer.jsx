import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="mt-10 w-full border-t dark:border-t-dark-800 py-8 px-8 lg:px-0">
      <div className="max-w-[937px] mx-auto sm:flex sm:justify-between">
        <div className="flex justify-center dark:text-dark-100">
          <Logo />
        </div>

        <span className="text-gray-400">&copy; {new Date().getFullYear()} Mass Converter</span>
      </div>
    </footer>
  );
};

export default Footer;
