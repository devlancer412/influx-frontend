export const formatNumber = (value: number) => {
  return value > 1000000
    ? `${(value / 1000000).toFixed(2)}M`
    : value > 1000
    ? `${(value / 1000).toFixed(2)}K`
    : `${value}`;
};
