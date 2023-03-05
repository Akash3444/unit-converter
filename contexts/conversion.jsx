import convert from 'convert-units';
import { createContext, useContext, useMemo, useState } from 'react';

const ConversionContext = createContext();

export const ConversionProvider = ({ children }) => {
  const unitPossibilities = useMemo(() => convert().possibilities('temperature'), []);
  const [conversionFrom, setConversionFrom] = useState({ value: 0, unit: unitPossibilities[0] });
  const [conversionTo, setConversionTo] = useState({ value: 0, unit: unitPossibilities[1] });

  const handleConversionFromChange = ({ target: { name, value } }) => {
    const convertValue = name === 'value' ? value : conversionFrom.value;
    const from = name === 'value' ? conversionFrom.unit : value;
    const convertedValue = convert(convertValue).from(from).to(conversionTo.unit).toFixed(3);

    setConversionFrom((prev) => ({ ...prev, [name]: value }));
    setConversionTo((prev) => ({ ...prev, value: convertedValue }));
  };

  const handleConversionToChange = ({ target: { name, value } }) => {
    const convertValue = name === 'value' ? value : conversionTo.value;
    const from = name === 'value' ? conversionTo.unit : value;
    const convertedValue = convert(convertValue).from(from).to(conversionFrom.unit).toFixed(3);

    setConversionTo((prev) => ({ ...prev, [name]: value }));
    setConversionFrom((prev) => ({ ...prev, value: convertedValue }));
  };

  return (
    <ConversionContext.Provider
      value={{
        conversionFrom,
        conversionTo,
        unitPossibilities,
        handleConversionFromChange,
        handleConversionToChange,
      }}
    >
      {children}
    </ConversionContext.Provider>
  );
};

export const useConversion = () => useContext(ConversionContext);
