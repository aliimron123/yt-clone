import React from 'react';

const NumberToText: React.FC<{ number: number }> = ({ number }) => {
  const numberToWords = (num: number): string => {
    if (num === 0) return 'Zero';

    const units = ['', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const teens = ['', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
    const tens = ['', '10', '20', '30', '40', '50', '60', '70', '80', '90'];

    const getUnder100 = (n: number): string => {
      if (n < 10) return units[n];
      if (n >= 11 && n <= 19) return teens[n - 10];
      const digit = n % 10;
      const ten = Math.floor(n / 10);
      return `${tens[ten]} ${units[digit]}`;
    };

    if (num < 100) return getUnder100(num);

    const hundred = Math.floor(num / 100);
    const remainder = num % 100;
    const under100 = getUnder100(remainder);
    const hundredText = `${units[hundred]}`;

    if (remainder === 0) return hundredText;
    return `${hundredText} ${under100}`;
  };

  const numberToText = (num: number): string => {
    if (num < 1000) return numberToWords(num);

    const suffixes = ['', 'rb', 'jt', 'M', 'Trillion'];
    const suffixIndex = Math.floor(Math.log10(num) / 3);
    const divisor = Math.pow(10, suffixIndex * 3);
    const quotient = Math.floor(num / divisor);
    const remainder = num % divisor;

    return `${numberToWords(quotient)} ${suffixes[suffixIndex]}`;
  };

  return <div>{numberToText(number)}</div>;
};

export default NumberToText;
