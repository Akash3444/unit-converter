import convert from 'convert-units';
import React from 'react';
import { useConversion } from '../contexts/conversion';

const ConversionDescription = () => {
  const { conversionFrom, conversionTo } = useConversion();
  const { singular: fromUnitSingular, plural: fromUnitPlural } = convert().describe(
    conversionFrom.unit
  );
  const { singular: toUnitSingular, plural: toUnitPlural } = convert().describe(conversionTo.unit);
  const conversionFromUnitText = +conversionFrom.value === 1 ? fromUnitSingular : fromUnitPlural;
  const conversionToUnitText = +conversionTo.value === 1 ? toUnitSingular : toUnitPlural;

  return (
    <div className="p-1.5 lg:p-0 mt-3">
      <h2 className="mb-2 font-roboto-mono text-gray-400 text-sm">Conversion</h2>
      <p className="text-[22px] leading-7 text-gray-500">
        <strong className="text-primary-900 dark:text-gray-300">
          {conversionFrom.value || 0}{' '}
        </strong>
        {conversionFromUnitText} ({conversionFrom.unit}) to {conversionToUnitText} (
        {conversionTo.unit}).
      </p>
      <p className="mt-2 text-[22px] leading-7 text-gray-500">
        <strong className="text-primary-900 dark:text-gray-300">
          {conversionFrom.value || 0}{' '}
        </strong>
        {conversionFromUnitText} ({conversionFrom.unit}) converts to {conversionTo.value}{' '}
        {conversionToUnitText} ({conversionTo.unit}).
      </p>
    </div>
  );
};

export default ConversionDescription;
