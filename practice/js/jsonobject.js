
console.clear();
// this is a js object
var jsobj = {
    name : "John",
    age : 27
}

console.log(jsobj.age)
// this is a json object
var jsonobj = {
    "name" : "John",
    "age" : 27,
    score : [10,20,30],
    subjects : {
        "math" : 29,
        "science" : 98
    }
}
console.log(jsonobj.age)

// convert object into string
var jsonstring = JSON.stringify(jsonobj);
console.log(jsonstring);
// convert string into object
console.log(JSON.parse(jsonstring));
// Json array
var jsonarr = [
    {
        "name" : "John",
        "age" : 27
    },
    {
        "name" : "Claire",
        "age" : 24
    },
    {
        "name" : "Smith",
        "age" : 32
    }
]
console.log(jsonarr[1])