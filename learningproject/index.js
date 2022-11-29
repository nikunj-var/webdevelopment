// //primitive data types
// let a = null;
// let b = 23;
// let c = true;
// let d = BigInt("1234");
// let e = "nikunj";
// let f = Symbol("i am symbol");
// let g = undefined;

// console.log(a, b, c, d, e, f, g);

// //non-primitive data type-object
// const item = {
//   nikunj: true,
//   varshney: false,
//   lovish: 67,
//   rohan: undefined,
// };

// console.log(item["nikunj"]);

// // chapter1-practice set
// //1-create a variable of type string and try to add a number in it
// let a = "nikunj";
// let b = "varshney";
// console.log(a+b)

// //2-use type of operator to find the datatype of the variable
// console.log(typeof a)

// //3-create a const object in javascipt.Can you change it to hold a number later
// NO

// //4-were you able to add a new key to const object?
// NO

// //5-write a js program to create a word meaning dictionary of 5 words
// const dict={
//     Anachronism:"something (or someone) that is out of place in terms of time or chronology",
//     Accismus:"someone feigns indifference to something he or she desires.",
//     Cacophony:" a harsh mixture of sounds."
// }

// //operators in js
// let a=45;
// let b=4;

// //arithmetic operators
// console.log("a+b=",a+b)
// console.log("a-b=",a-b)
// console.log("a*b=",a*b)
// console.log("a/b=",a/b)
// console.log("a**b=",a**b)
// console.log("a%b=",a%b)
// console.log("a++=",a++)
// console.log("a--=",a--)

// //assignment operator
// console.log("a=b",a+b)
// console.log("a-=b=",a-b)
// console.log("a*=b=",a*b)
// console.log("a/=b=",a/b)
// console.log("a**=b=",a**b)
// console.log("a%=b=",a%b)

// //comparison operator
// console.log("a==b",a==b)
// console.log("a!=b=",a!=b)
// console.log("a>=b=",a>=b)
// console.log("a<=b=",a<=b)
// console.log("a===b=",a===b)
// console.log("a!==b=",a!==b)

// //conditional statement
// let a = prompt("hii what is your age") //prompt is used to take input
// a = Number.parseInt(a)
// if (a > 0) {
//   alert("this is a valid age")
// }

//for loops in js
// let sum=0
// let n=100
// n=Number.parseInt(n)
// for(let i=0;i<n;i++){
//     console.log(i+1)
// }

//for in loop
let abc={
    dev:100,
    kushagra:90,
    krati:95,
    aditi:80,
    ishika:10
}
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}

//for-of loop
for(let b of "dev"){
    console.log(b)
}