import React from 'react';
import { Converter } from './Converter';
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  return (
    <header className="p-1 md:p-3 lg:p-7">
      <div className="bg-primary-500 px-2 pb-3 md:pb-10 rounded-[3px]">
        <div className="max-w-[937px] mx-auto md:mr-auto">
          <div className="flex items-center justify-between max-w-md md:max-w-none mx-auto">
            <div className="py-5">
              <Logo />
            </div>

            <ThemeToggler />
          </div>

          <div className="md:flex">
            <div>
              <h1 className="mt-5 md:mt-20 text-center md:text-left text-[30px] tracking-tight leading-8 font-quicksand font-semibold text-primary-900">
                Convert kilograms into <br />
                pounds quickly.
              </h1>
              <p className="mt-4 text-center md:text-left text-[15px] text-primary-900">
                Easily enter your kilogram weight and instantly <br />
                get the result in pounds.
              </p>
            </div>

            <Converter />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
