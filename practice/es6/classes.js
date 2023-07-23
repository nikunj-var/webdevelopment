class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getDetails = () => {
    let str =
      "Name of the person is " +
      this.name +
      "\n" +
      "BirthYear is " +
      this.birthYear;
    return str;
  };
}
class Pilot {
  constructor(exp, jobtype, license) {
    this.exp = exp;
    this.jobtype = jobtype;
    this.license = license;
  }

  getData = () => {
    let str =
      "Experience of the person is " +
      this.exp +
      "\n" +
      "Jobtype is " +
      this.jobtype +
      "\n" +
      "License: " +
      this.license;
    return str;
  };
}

var nikunj = new Person("Nikunj", 2002);

console.log(nikunj.getDetails());

var john = new Pilot(28,'private','yes');
console.log(john.getData())