import convert from 'convert-units';
import React from 'react';
import { useConversion } from '../contexts/conversion';

const quickConversions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 500, 1000];

const QuickConversions = () => {
  const { conversionFrom, conversionTo } = useConversion();

  return (
    <aside className="">
      <div className="w-full mt-3 p-2 lg:p-0">
        <h2 className="text-center font-quicksand text-[22px] font-semibold text-primary-900 dark:text-dark-300">
          Quick Conversions
        </h2>
        <table className="mt-2 w-full font-roboto-mono text-center">
          <thead className="border-b dark:border-b-dark-800">
            <tr className="font-black text-gray-400">
              <th className="py-2">
                {convert().describe(conversionFrom.unit).singular} ({conversionFrom.unit})
              </th>
              <th className="py-2">
                {convert().describe(conversionTo.unit).singular} ({conversionTo.unit})
              </th>
            </tr>
          </thead>
          <tbody className="py-10 text-[15px] text-primary-900 dark:text-dark-400 leading-10">
            <tr>
              <td className="py-2"></td>
            </tr>
            {quickConversions.map((value) => (
              <tr key={value}>
                <td>
                  {value} {conversionFrom.unit}
                </td>
                <td>
                  {convert(value).from(conversionFrom.unit).to(conversionTo.unit)}{' '}
                  {conversionTo.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </aside>
  );
};

export default QuickConversions;
