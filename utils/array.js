export const clean = array => {
  const fixLength = array.length;

  for (let index = 0; index <= fixLength; index++) {
    array = array.splice(0, 1);
  }

  return array;
};
