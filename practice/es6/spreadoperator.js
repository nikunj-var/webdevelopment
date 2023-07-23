console.log();

// arrays

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1];
arr1.push(10);
console.log(arr2);

let arr3 = arr1.concat(arr2);

let arr4 = [...arr1,...arr2,...arr3];
console.log(arr3);
console.log(arr4);

// objects

let mobj1 = {
    name : 'John'
}
let mobj2 = {
    age : 23
}
let mobj3 = {
    ...mobj1,...mobj2
}
console.log(mobj3)