const numArr = [1, 2, 3, 4, 5];
const arr = numArr.filter((item) => {
  // to check whether number is even or odd
  return item % 2 !== 0;
});
console.log(arr);

var marr = [
  {
    name: "Nikunj",
    age: 21,
  },
  {
    name: "Krati",
    age: 22,
  },
  {
    name: "john",
    age: 10,
  },
];

const arrobj = marr.filter((item) => {
  // to check whether number is even or odd
  return item.age > 10;
});
console.log(arrobj);
