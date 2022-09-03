//constructor functions- es6 classes and prototypes
/*
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = () => `${firstName} ${lastName}`;
}
*/


//ES6 example
class Person{
    constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
getBirthYear(){
    return this.dob.getFullYear();
}
getFullName(){
    return `${this.firstName} ${this.lastName}`;
}
}
//Instantiate Object
const person1 = new Person('Madhu', 'K', '3-29-1999');
const person2 = new Person('Hrithik', 'C', '9-06-1999');

console.log(person1);
console.log(person2.getBirthYear());
console.log(person2.getFullName());

