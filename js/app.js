/* ////////   PLUS NUMBER ONE   //////// */
function cool () {
    let like = 8000 + 9000;
    console.log(like);
}

cool ();



/* ////////   PLUS NUMBER TWO   //////// */
function info (a, b) {
    let namber = a + b;
    console.log(namber);
}

info (10000, 20000);



/* ////////   BURGER   //////// */
const burger = document.querySelector('#burger');
const links = document.querySelector('#links');

burger.addEventListener('click', function () {
    burger.classList.toggle("active");
})

burger.addEventListener('click', function (event) {

    event.preventDefault();
    links.classList.toggle("active");
})



/* ////////   HEADER   //////// */
let header = document.querySelector('#header');

window.addEventListener('scroll', function () {
    let headerScroll = window.scrollY;

    if(headerScroll > 750) {
        header.classList.add("fixed");
    }else {
        header.classList.remove("fixed");
    }

    /* console.log(headerScroll); */
})



/* ////////   SCROLL FOR BLOG   //////// */
document.addEventListener('DOMContentLoaded', function () {
    const navLink = document.querySelectorAll(".nav_link");

    for(let i = 0; i<navLink.length; i++) {
        navLink[i].addEventListener('click', function(event) {
            event.preventDefault();

            const blockID = event.target.getAttribute("href").substring(1);

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: "start"
            })

        })
    }
})



/* ////////   SCROLL TOP   //////// */
document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelectorAll(".header_logo");

    for(let i = 0; i<logo.length; i++) {
        logo[i].addEventListener('click', function(event) {
            event.preventDefault();

            const logoID = event.target.getAttribute("href").substring(1);

            document.getElementById(logoID).scrollIntoView({
                behavior: 'smooth',
                block: "start"
            })

        })
    }
})



/* ////////   ACCORDION   //////// */
let accordionButton = document.querySelectorAll('.accordion__button');
let i;

for (i = 0; i < accordionButton.length; i++) {
    accordionButton[i].onclick = function () {

        this.nextElementSibling.classList.toggle("accordionShow");
    }
}



/* ////////   IPHONE ANIMATION   //////// */
let iphone = document.querySelector('.iphone');

window.addEventListener('scroll', function () {
    let scrollIphone = window.scrollY;

    if(scrollIphone > 3300) {
        iphone.classList.add("show");
    } else {
        iphone.classList.remove("show");
    }
})



















