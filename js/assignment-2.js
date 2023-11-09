console.log("--- Page 2 ---");

const addButton = document.querySelector('.btn-add');
const clearButton = document.querySelector('.btn-clear');
const list = document.querySelector('.ul-list');

addButton.addEventListener('click', function(){
    const text = prompt('Vul uw tekst in');
    list.innerHTML += '<li>' + text + '</li>'; 
});

clearButton.addEventListener('click', function(){
    list.innerHTML = '';
});