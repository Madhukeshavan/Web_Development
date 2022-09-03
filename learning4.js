const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('h1').style.background = 'red';
    //document.querySelector('body').style.background = 'yellow';
    document.querySelector('.items').lastElementChild.innerHTML = '<h4>DONE 1</h4>';
    document.querySelector('body').classList.add('bg-dark');
    console.log(e.target.className);
})