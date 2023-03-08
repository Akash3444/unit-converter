import convert from 'convert-units';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

const ConversionContext = createContext();

export const ConversionProvider = ({ children }) => {
  const {
    query: { unit = 'mass' },
  } = useRouter();
  const [unitPossibilities, setUnitPossibilities] = useState(convert().possibilities(unit));
  const [conversionFrom, setConversionFrom] = useState({ value: 10, unit: unitPossibilities[0] });
  const [conversionTo, setConversionTo] = useState({ value: 0, unit: unitPossibilities[1] });

  useEffect(() => {
    const newUnitPossibilities = convert().possibilities(unit);
    const [conversionFromUnit, conversionToUnit] = newUnitPossibilities;
    const convertedValue = convert(conversionFrom.value)
      .from(conversionFromUnit)
      .to(conversionToUnit);

    setUnitPossibilities(newUnitPossibilities);
    setConversionFrom((prev) => ({ ...prev, unit: conversionFromUnit }));
    setConversionTo({
      value: +convertedValue === 0 ? 0 : convertedValue.toFixed(3),
      unit: conversionToUnit,
    });
  }, [unit]);

  const handleConversionFromChange = ({ target: { name, value } }) => {
    const convertValue = name === 'value' ? value : conversionFrom.value;
    const from = name === 'value' ? conversionFrom.unit : value;
    const convertedValue = convert(convertValue).from(from).to(conversionTo.unit);

    setConversionFrom((prev) => ({ ...prev, [name]: value }));
    setConversionTo((prev) => ({
      ...prev,
      value: +convertedValue === 0 ? 0 : convertedValue.toFixed(3),
    }));
  };

  const handleConversionToChange = ({ target: { name, value } }) => {
    const convertValue = name === 'value' ? value : conversionTo.value;
    const from = name === 'value' ? conversionTo.unit : value;
    const convertedValue = convert(convertValue).from(from).to(conversionFrom.unit);

    setConversionTo((prev) => ({ ...prev, [name]: value }));
    setConversionFrom((prev) => ({
      ...prev,
      value: +convertedValue === 0 ? 0 : convertedValue.toFixed(3),
    }));
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
