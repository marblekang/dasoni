interface Params {
  value: string | number;
  decimal: number;
}
export const roundToDecimalPlaces = ({ value, decimal }: Params) => {
  if (isNaN(Number(value))) {
    return 0;
  }
  const target = typeof value === "string" ? Number(value) : value; //NaN 도 고려해야함.
  const factor = Math.pow(10, decimal); // 10의 7승
  return Math.round(target * factor) / factor;
};
