import convert from 'convert-units';
import React from 'react';
import { useConversion } from '../contexts/conversion';

const OtherConversions = () => {
  const { conversionFrom, massPossibilities } = useConversion();
  const { singular: fromUnitSingular, plural: fromUnitPlural } = convert().describe(
    conversionFrom.unit
  );
  const conversionFromUnitText = +conversionFrom.value === 1 ? fromUnitSingular : fromUnitPlural;

  return (
    <div className="p-1.5 lg:p-0 mt-3 md:mt-6">
      <h2 className="mb-4 font-roboto-mono text-gray-400 text-sm">Also Converts To</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {massPossibilities.map(
          (unit) =>
            unit !== conversionFrom.unit && (
              <div key={unit} className="border dark:border-dark-800 rounded text-center p-4">
                <h3 className="font-roboto-mono font-black text-sm text-gray-400/80">
                  {conversionFrom.value || 0} {conversionFromUnitText} ({conversionFrom.unit})
                </h3>
                <h1 className="my-1 font-quicksand text-[20px] font-semibold text-primary-800 dark:text-gray-300">
                  {convert(conversionFrom.value).from(conversionFrom.unit).to(unit)}
                </h1>
                <h2 className="font-quicksand text-lg text-gray-500 dark:text-dark-400 font-semibold">
                  {convert().describe(unit).singular} ({unit})
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default OtherConversions;
