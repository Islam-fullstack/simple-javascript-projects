window.addEventListener('DOMContentLoaded', function () {
    const photo = document.querySelector('.person-photo'),
        name = document.querySelector('.person-name'),
        job = document.querySelector('.person-job'),
        about = document.querySelector('.person-about'),
        left = document.querySelector('.slider .left'),
        right = document.querySelector('.slider .right'),
        surprise = document.querySelector('.surprise');

    const photosArr = ['A-Day-in-the-Life-of-a-Web-Developer-2-or3dqau4fp30hw7i5yg12kruo142zihlxj7qu4rbio.jpg', 'blond-female-web-developer.jpg', 'depositphotos_208866120-stock-photo-serious-female-software-developer-creating.jpg', 'gettyimages-1212006375-612x612.jpg'];


    let count = 0;
    let len = photosArr.length;
    right.addEventListener('click', () => {
        count++;
        if (count < len) {
            photo.style.backgroundImage = `url(${photosArr[count]})`
            name.textContent = ''
        }
        else if (count === len) {
            count = 0;
            photo.style.backgroundImage = `url(${photosArr[0]})`
        }
    });




})