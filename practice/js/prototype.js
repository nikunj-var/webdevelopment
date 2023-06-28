// console.clear();
// function Person(fname,pyearofbirth,pjob){
//     this.name = fname;
//     this.yearOfBirth = pyearofbirth;
//     this.pJob = pjob;
// }
// Person.prototype.calculatedAge = function(){
//     return 2019 - this.yearOfBirth;
// }
// var  john = new Person('Nikunj','2002','Student');
// console.log(john.calculatedAge());
// console.log(john);

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
      };
  }
  
  // Adding a method to the prototype

  
  // Creating an instance of Person
  var john = new Person("John", 25);
  var gg = new Person("GG",28);
  // Accessing properties and methods
  console.log(john.name);  // Output: John
  console.log(john.age);   // Output: 25
  john.greet();            // Output: Hello, my name is John
  gg.greet();