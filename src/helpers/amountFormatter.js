export const formatterAmount = (value, currency = 'PEN', fixedDecimalScale) => {
  const digits = fixedDecimalScale ? 2 : 0;
  
  const formatter = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });

  return formatter.format(value)
}