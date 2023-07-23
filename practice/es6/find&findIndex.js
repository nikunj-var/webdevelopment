const numarr = [-1, -2, -3, -4, 1, 2, 3, 4];

const result = numarr.find((item) => {
  return item % 2 === 0 && item > 0;
});

console.log(result);

const result2 = numarr.findIndex((item) => {
  return item % 2 === 0 && item > 0;
});

console.log(result2);
