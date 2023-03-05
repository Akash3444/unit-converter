import Link from 'next/link';
import React from 'react';
import ConverterIcon from './icons/Converter';

const Logo = () => {
  return (
    <Link
      className="flex items-center justify-center md:justify-start max-w-max mx-auto md:ml-0 md:mr-auto"
      href="/"
    >
      <ConverterIcon />
      <strong className="ml-1 uppercase whitespace-nowrap">Unit converter</strong>
    </Link>
  );
};

export default Logo;
