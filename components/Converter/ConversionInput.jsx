import convert from 'convert-units';
import React from 'react';
import { useConversion } from '../../contexts/conversion';

const ConversionInput = ({ conversionFrom, conversionTo, onChange }) => {
  const { unitPossibilities } = useConversion();

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          name="value"
          placeholder="100"
          className="w-full h-[44px] rounded border border-gray-300 focus:outline-none focus:ring-1 hover:ring-primary-500 focus:ring-primary-500 focus-within:ring-primary-500 pl-[10px]"
          value={conversionFrom.value}
          onChange={onChange}
        />
        <select
          name="unit"
          value={conversionFrom.unit}
          onChange={onChange}
          className="absolute inset-y-0 right-1.5 my-auto border border-gray-300 h-8 rounded-sm text-xs focus:outline-none"
        >
          {unitPossibilities.map((unit) => (
            <option key={unit} value={unit} disabled={unit === conversionTo.unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <span className="absolute top-full mt-1 left-0 text-[10px] text-gray-400">
        1 {conversionTo.unit} = {convert(1).from(conversionTo.unit).to(conversionFrom.unit)}{' '}
        {conversionFrom.unit}
      </span>
    </div>
  );
};

export default ConversionInput;
