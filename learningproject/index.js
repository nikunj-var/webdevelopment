//primitive data types
let a = null;
let b = 23;
let c = true;
let d = BigInt("1234");
let e = "nikunj";
let f = Symbol("i am symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);

//non-primitive data type-object
const item = {
  nikunj: true,
  varshney: false,
  lovish: 67,
  rohan: undefined,
};

console.log(item["nikunj"]);

// chapter1-practice set
//1-create a variable of type string and try to add a number in it
let h = "nikunj";
let k = "varshney";
console.log(h + k);

//2-use type of operator to find the datatype of the variable
console.log(typeof h);

//3-create a const object in javascipt.Can you change it to hold a number later
NO;

//4-were you able to add a new key to const object?
NO;

//5-write a js program to create a word meaning dictionary of 5 words
const dict = {
  Anachronism:
    "something (or someone) that is out of place in terms of time or chronology",
  Accismus: "someone feigns indifference to something he or she desires.",
  Cacophony: " a harsh mixture of sounds.",
};

//operators in js
a = 45;
b = 4;

//arithmetic operators
console.log("a+b=", a + b);
console.log("a-b=", a - b);
console.log("a*b=", a * b);
console.log("a/b=", a / b);
console.log("a**b=", a ** b);
console.log("a%b=", a % b);
console.log("a++=", a++);
console.log("a--=", a--);

//assignment operator
console.log("a=b", a + b);
console.log("a-=b=", a - b);
console.log("a*=b=", a * b);
console.log("a/=b=", a / b);
console.log("a**=b=", a ** b);
console.log("a%=b=", a % b);

//comparison operator
console.log("a==b", a == b);
console.log("a!=b=", a != b);
console.log("a>=b=", a >= b);
console.log("a<=b=", a <= b);
console.log("a===b=", a === b);
console.log("a!==b=", a !== b);

//conditional statement
a = prompt("hii what is your age"); //prompt is used to take input
a = Number.parseInt(a);
if (a > 0) {
  alert("this is a valid age");
}

//for loops in js
sum = 0;
sn = 100;
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  console.log(i + 1);
}

//for in loop
let obj = {
  dev: 100,
  kushagra: 90,
  krati: 95,
  aditi: 80,
  ishika: 10,
};
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}

//for-of loop
for (let b of "dev") {
  console.log(b);
}

let n = 10;
let sum = 0;
for (let i = 0; i < n; i++) {
  sum += i;
}
console.log(sum);

//with let it gives us error because let has local scope(block scope) but if we use var instead of let then it runs correctly
console.log(i);

//while loops
let x = 10;
let i = 0;
let j = 0;
while (i < n) {
  console.log(i);
  i++;
}

//do-while loops
do {
  console.log(j);
  j++;
} while (j < n);

//Functions
function avg(a, b) {
  return (a + b) / 2;
}

console.log(avg(2, 3));

//function syntax using const
const sumoftwonumber = (a, b) => {
  return a + b;
};

console.log(sumoftwonumber(1, 2));

const printhello = () => {
  console.log("hello baccho");
};

//practice set
let marks = {
  harry: 90,
  shubham: 9,
  ovish: 20,
  neha: 100,
};

//problem no 1
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "the marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}

//problem 2- problem 1 using for in loop
for (let i in marks) {
  console.log(i + "->" + marks[i]);
}

//problem3
let numver = 6;
let z;
while (z != numver) {
  z = prompt("enter number");
}
console.log("you entered correct number");

//problem4-function to find mean of 5 numbers
const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};

console.log(mean(1, 2, 3, 4, 5));

//Strings-used to store and manipulate a txt
let name = "nikunj";
let singlequote = "nikunj";
console.log(name.length);
console.log(name[0]);

//Template literals
let frnd1 = "nikunj";
let frnd2 = "krati";
// let sentence=`frnd1 is a friend of frnd2` .    "this will print as it is"
let sentence = `${frnd1} is a friend of ${frnd2}`;
console.log(sentence);

//Escape sequence characters
let fruit = "mang'o";
console.log(fruit);

//to-uppercase function
console.log(frnd1.toUpperCase());

//to-lowercase function
console.log(frnd1.toLowerCase());

//slice function
console.log(frnd1.slice(2, 6));

//replace function
console.log(frnd1.replace("nikunj", "dev"));

//concat function
console.log(frnd1.concat(frnd2));

//note-strings are immutable

//Practice Set -Strings

//problem1-
newstr = "nikunj\"varshney"
console.log(newstr.length)

//problem2-
sentence="i am a good girl"
const word="good"
console.log(sentence.includes(word))
