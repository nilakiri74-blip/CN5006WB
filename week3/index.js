const student = require('./studentinfo');
const person = require('./person');

console.log("Student Name: " + student.getName());
console.log(student.Location());
console.log(student.dob);
console.log("Grade is " + student.Studentgrade(55));

const person1 = new person("Jim", 22, "myemail@gmail.com");
console.log("Using Person Module:", person1.getPersonInfo());
