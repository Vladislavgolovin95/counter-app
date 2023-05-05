const button = document.getElementById('addCircleButton');
const buttonReset = document.getElementById('resetButton');
const counterText = document.getElementById('counterValue')
let counter = 0;

button.addEventListener('click', function() {
    counter = counter + 1;

    counterText.innerText = counter;
});

buttonReset.addEventListener('click', function() {
    counter = 0;

    counterText.innerText = counter;
})
