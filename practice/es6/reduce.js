const numArr = [1, 2, 3, 4, 5];
const sum = numArr.reduce((acc, item) => {
  acc += item;
  //   console.log(acc);
  return acc;
}, 0);

console.log(sum);

var marr = [
  {
    name: "Nikunj",
    age: 21,
  },
  {
    name: "Krati",
    age: 22,
  },
];
const result = marr.reduce((acc, item) => {
  //   console.log(item.age);
  return acc + item.age;
}, 0);
console.log("the sum of age is ", result);
