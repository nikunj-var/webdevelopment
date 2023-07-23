console.clear();

const name = "John Manuel Lark";
const nameArray = name.split(' ');

console.log(nameArray);

let firstname = nameArray[0];

let lastname = nameArray[2];

let [firstname2,lastname2]=nameArray;

console.log(firstname + ' ' + lastname);
console.log(firstname2 + ' ' + lastname2);

const person = {
    first : 'John',
    last : 'Lark',
    age : 28
}

// variable names must match with keys
let {first,last} = person;

console.log(first + ' ' + last);