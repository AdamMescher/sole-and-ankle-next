const formatCentsToDollars = (cents: number) => {
  let minimumFractionDigits = 2;
  let maximumFractionDigits = 2;

  if (cents % 100 === 0) {
    minimumFractionDigits = 0;
    maximumFractionDigits = 0;
  }

  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(cents / 100);
};

export default formatCentsToDollars;
