window.addEventListener('DOMContentLoaded', function () {
    const photo = document.querySelector('.person-photo'),
        name = document.querySelector('.person-name'),
        job = document.querySelector('.person-job'),
        about = document.querySelector('.person-about'),
        left = document.querySelector('.slider .left'),
        right = document.querySelector('.slider .right'),
        surprise = document.querySelector('.surprise');


    const person = [
        {
            id: 1,
            name: 'Johnatan Belatris',
            job: 'Game Developer',
            about: 'The tech industry is growing and changing rapidly, so it’s important that anyone involved in it stay up to date on the latest tech news and advancements. As the industry expands and impacts even more of our day to day lives, it’s becoming important for people in every industry to know what’s going on in the tech field. While this may seem like a daunting task on the face of it, tech news can be really interesting.',
            photo: 'A-Day-in-the-Life-of-a-Web-Developer-2-or3dqau4fp30hw7i5yg12kruo142zihlxj7qu4rbio.jpg',
        },
        {
            id: 2,
            name: 'Hermione Grenger',
            job: 'Designer & Developer',
            about: 'It can be difficult to know where to start, and not all news sources are reliable or provide the best information. That’s why we’ve put together a list of some of our favorite resources to help you stay informed! Bookmark these pages and revisit them often or you can end up being one really out-of-date dev.',
            photo: 'blond-female-web-developer.jpg',
        },
        {
            id: 3,
            name: 'Anna Princess',
            job: 'Web Developer',
            about: 'If you don’t know what Twitter is by now, well you should. Twitter is a great resource for following your technology and language of choice. So many thought leaders, brands, and experts take to Twitter to shout out their newest findings, trends, and tips.',
            photo: 'depositphotos_208866120-stock-photo-serious-female-software-developer-creating.jpg',
        },
        {
            id: 4,
            name: 'Selena Gomez',
            job: 'Full Stack & Senior',
            about: 'Here is a fun fact. JavaScript Weekly is a weekly newsletter that gives you the best information on what’s new in JavaScript. They email you once every Friday and won’t sell your information or spam your mailbox, and it’s simple to unsubscribe at any time. You can view their current newsletter on their homepage to get an idea of what they’ll be sending you.',
            photo: 'gettyimages-1212006375-612x612.jpg',
        }
    ]

    let count = 0;
    let len = person.length;

    console.log(person)
    right.addEventListener('click', () => {
        count++;

        if (count === len) {
            count = 0;

        }
        showDisplay(person[count]);
    });

    left.addEventListener('click', () => {
        count--;
        if (count === -1)
            count = 3;
        showDisplay(person[count]);

    });

    surprise.addEventListener('click', () => {
        showDisplay(person[randomSurprise()]);
    })

    function showDisplay(single) {
        console.log(single.id);
        photo.style.backgroundImage = `url(${single.photo})`;
        name.textContent = `${single.name}`;
        job.textContent = `${single.job}`;
        about.textContent = `${single.about}`;
    }

    function randomSurprise() {
        return Math.floor(Math.random() * len);
    }


})