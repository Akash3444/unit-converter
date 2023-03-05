import convert from 'convert-units';
import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  const renderConverters = () =>
    convert()
      .measures()
      .map((measure) => (
        <Link
          key={measure}
          href={`/convert/${measure}`}
          className="max-w-max hover:underline underline-offset-[4px] capitalize text-gray-500 dark:text-gray-400"
        >
          {measure} Converter
        </Link>
      ));

  return (
    <footer className="mt-10 w-full border-t dark:border-t-dark-800 py-8 px-8 lg:px-0">
      <div className="max-w-[937px] mx-auto ">
        <h3 className="uppercase tracking-wide mb-4 font-bold text-gray-900 dark:text-gray-100">
          Our converters
        </h3>
        <div className="divide-y dark:divide-gray-700">
          <div
            className="grid gap-2 pb-8"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(205px, 1fr))' }}
          >
            {renderConverters()}
          </div>

          <div className="sm:flex sm:justify-between pt-8">
            <div className="mb-4 sm:mb-0 flex justify-center dark:text-dark-100">
              <Logo />
            </div>

            <span className="block w-full text-gray-400 text-center sm:text-right">
              &copy; {new Date().getFullYear()} Unit Converter
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
