const decrement = document.querySelector('.decrement')
const increment = document.querySelector('.increment')
const display = document.querySelector('.display')

let num = 0;

increment.addEventListener('click', function(){
    num = num + 1
    display.innerHTML = num
});

decrement.addEventListener('click', function(){
    num = num - 1
    display.innerHTML = num
});