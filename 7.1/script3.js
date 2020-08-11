const button = document.querySelector('#button-counter');
const p = document.querySelector('#counter');
let counter = 0;

button.addEventListener('click', () => { p.innerHTML = counter++ });