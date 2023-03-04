import React, { useState } from 'react';
import { useConversion } from '../../contexts/conversion';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import Switch from '../icons/Switch';
import ConversionInput from './ConversionInput';

const Converter = () => {
  const [isCopied, setIsCopied] = useState(false);
  const { conversionFrom, conversionTo, handleConversionFromChange, handleConversionToChange } =
    useConversion();
  const { copy } = useCopyToClipboard();

  const handleCopyResult = () => {
    if (!isCopied && copy(conversionTo.value)) {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="mt-6 max-w-md mx-auto md:ml-auto md:mr-0 bg-white dark:bg-dark-900 border-t-4 border-primary-700 rounded">
      <div className="border-b dark:border-b-dark-800 border-gray-300">
        <p className="p-6 text-gray-400 text-center text-[15px]">
          You can also press the arrow so you can select other weight units that you could convert.
        </p>
      </div>

      <div className="p-6">
        <p className="text-gray-400">
          {conversionFrom.value || 0} ({conversionFrom.unit}) kilograms is equal to
        </p>
        <span className="text-xl dark:text-dark-100">
          {conversionTo.value} ({conversionTo.unit}) pounds
        </span>

        <div className="mt-6 w-full max-w-full flex items-start justify-between">
          <ConversionInput
            conversionFrom={conversionFrom}
            conversionTo={conversionTo}
            onChange={handleConversionFromChange}
          />

          <div className="mt-1 h-10 w-10 grow-1 shrink-0">
            <button className="text-white dark:text-dark-900">
              <Switch />
            </button>
          </div>

          <ConversionInput
            conversionFrom={conversionTo}
            conversionTo={conversionFrom}
            onChange={handleConversionToChange}
          />
        </div>

        <button
          onClick={handleCopyResult}
          className="block max-w-max mx-auto mt-4 text-center uppercase text-[13px] text-primary-500"
        >
          {isCopied ? 'Copied!' : 'Copy result'}
        </button>
      </div>
    </div>
  );
};

export default Converter;
