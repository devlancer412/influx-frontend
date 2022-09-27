export const formatNumber = (value: number) => {
  return value > 1000000
    ? `${value / 1000000}M`
    : value > 1000
    ? `${value / 1000}K`
    : `${value}`;
};
