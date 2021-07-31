window.addEventListener('DOMContentLoaded', function () {
    const displayNumber = document.querySelector('.number');

    const btns = document.querySelectorAll('.btn');
    let count = 0;
    btns.forEach(function (item) {
        item.addEventListener('click', function (e) {
            console.log(e.currentTarget.classList);
            const itemClassArray = e.currentTarget.classList;
            if (itemClassArray.contains('decrease'))
                count--;
            else if (itemClassArray.contains('increase'))
                count++;
            else
                count = 0;
            if (count > 0) {
                displayNumber.style.color = 'green';
            }
            else if (count < 0) {
                displayNumber.style.color = 'red';
            }
            else {
                displayNumber.style.color = 'white'
            }
            displayNumber.textContent = count;
        });
    })

})