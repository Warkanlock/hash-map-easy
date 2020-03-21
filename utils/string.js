export const atoi = str => {
  const number = parseInt(
    String(str)
      .trim()
      .split()[0]
  );
  return Number.isInteger(number) ? Math.max(-(2 ** 31), number) : 0;
};
