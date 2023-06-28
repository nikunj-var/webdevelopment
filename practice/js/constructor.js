function Person(fname,pyearofbirth,pjob){
    this.name = fname;
    this.yearOfBirth = pyearofbirth;
    this.pJob = pjob;
    this.calculatedAge = function(){
        return 2019 - this.yearOfBirth;
    };
}
var  john = new Person('Nikunj','2002','Student');
console.log(john.calculatedAge());
console.log(john);