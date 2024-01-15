const decrement = document.querySelector('decrement')
const increment = document.querySelector('increment')
const display = document.querySelector('display')

let number = 0;

increment.addEventListener('click', function()
{
    number = number + 1
    display.innerHTML = number
})

decrement.addEventListener('click', function(){
    number = number - 1
    display.innerHTML = number
})
