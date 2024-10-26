export const calculateCurrentLevel = (power: number): number => {
  const log10Power = Math.log10(power);
  return (log10Power - 6) / 10;
};