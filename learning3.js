console.log('Learning3 DOM')

//DOM
//Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1')); //.container

//Multiple elements
console.log(document.getElementsByTagName('li')); // output : not an array
console.log(document.querySelectorAll('.item')); //output: array

//examples
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Oranges';
ul.children[1].innerText = 'Apples';
ul.lastElementChild.innerHTML = '<h1>Mangoes</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'red';

