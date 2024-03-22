const display = document.querySelector('.display')
let decrease = document.querySelector('.decrease')
let reset = document.querySelector('.reset')
let increase = document.querySelector('.increase')
let counter = 0;


decrease.addEventListener('click', () => {
    counter--;
    display.innerHTML = counter;
});

increase.addEventListener('click', () => {
    counter++;
    display.innerHTML = counter;
});

reset.addEventListener('click', () => {
    counter = 0;
    display.innerHTML = counter;
});