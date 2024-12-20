import React from 'react';

type CurrencyFormatterProps = {
    amount: number;
}

const CurrencyFormatter = ({ amount }: CurrencyFormatterProps) => {
  return (
    <>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)}
    </>
  );
}

export default CurrencyFormatter;