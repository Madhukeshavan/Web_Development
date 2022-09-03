console.log('Hello World');

const name1 = 'Madhu';
const age = 23;
const isCool = true;
const x= null;
const y = undefined;
let z;

console.log(typeof name1);

//Concatenation
console.log(`My name is ${name1} and age ${age}`);
console.log(name1.length);  //substring(0,5), split(''). toLowerCase(),

//Arrays
const numbers = new Array(1,2,3,4,);
const fruits = ['apples','oranges',true,10];
fruits.push('mangoes');
fruits.unshift('strawberries');
console.log(fruits);
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('apples'));

//Object literals - Key Value pairs
const person = {
    firstName : 'Madhu',
    lastName : 'K',
    age : 30,
    hobbies : ['music','painting','sports'],
    address : {
        street : '1st Cross',
        city : 'Bangalore',
        state : 'Karnataka'
    }
}
person.email = 'madhu@gmail.com'
console.log(person);
console.log(person.hobbies[1]);
const {firstName, lastName, address: {city}}= person;
console.log(firstName, city);

//Arrays of object
const todos = [
    {
        id : 1,
        task : 'Meeting 1',
        isCompleted : true
    },
    {
        id : 2,
        task : 'Meeting 2',
        isCompleted : false
    },
    {
        id : 3,
        task : 'Meeting 3',
        isCompleted : false
    }
];

console.log(JSON.stringify(todos));

//loops
for(let todo of todos){
    console.log(todo.id);
}

//forEach ,map, filter
todos.forEach(function(todo1){
    console.log(todo1.task)
});
//function simplified
todos.forEach((todo1)=>console.log(todo1.id));

const values = todos.map(function(todo2){
    return todo2.task;
});
console.log(values);

const values1 = todos.filter(function(todo2){
    return todo2.isCompleted == false;
}).map(function(todo){
    return todo.task;
})
console.log(values1);

//== matches only text, === matches data type and text

//switch case syntax
color = 'white';
switch(color){
    case 'red': 
    console.log('color is red');
    break;
    case 'blue': 
    console.log('color is blue');
    break;
    default: 
    console.log('no color');
    break;
}

//functions
function addNums(num1 = 1, num2=1){
    return num1 + num2;
}
console.log(addNums(1,10));

//arrow function
const subNums = (num1 = 1, num2 = 2) =>  num1-num2;
console.log(subNums(10,5));

//learn this keyword 



