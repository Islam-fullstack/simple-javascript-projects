window.addEventListener('DOMContentLoaded', function () {
    const displayNumber = document.querySelector('.number');
    const btnDecrease = document.querySelector('.decrease');
    const btnReset = document.querySelector('.reset');
    const btnIncrease = document.querySelector('.increase')
    btnDecrease.addEventListener('click', () => {
        let currentNumber = parseInt(displayNumber.textContent);
        displayNumber.textContent = (--currentNumber).toString();
        console.log(currentNumber);
    })

    btnReset.addEventListener('click', () => {
        displayNumber.textContent = '0';
    })

    btnIncrease.addEventListener('click', () => {
        displayNumber.textContent = (++displayNumber.textContent);
    })
})