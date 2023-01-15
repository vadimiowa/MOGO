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


/* ////////   STATISTIKS ANIMATION   //////// */
let static1 = document.querySelector('#static1');
let static2 = document.querySelector('#static2');
let static3 = document.querySelector('#static3');
let static4 = document.querySelector('#static4');
let static5 = document.querySelector('#static5');

window.addEventListener('scroll', function () {
    let staticFunction = window.scrollY;

    if(staticFunction > 1190) {
        static1.classList.add("active");
    } else {
        static1.classList.remove("active");
    }

    if(staticFunction > 1450) {
        static2.classList.add("active2");
    } else {
        static2.classList.remove("active2");
    }

    if(staticFunction > 1690) {
        static3.classList.add("active3");
    } else {
        static3.classList.remove("active3");
    }

    if(staticFunction > 1880) {
        static4.classList.add("active4");
    } else {
        static4.classList.remove("active4");
    }

    if(staticFunction > 2080) {
        static5.classList.add("active5");
    } else {
        static5.classList.remove("active5");
    }

    console.log(staticFunction);

})


/* ////////   HIPSTERS ANIMATION   //////// */
let hip1 = document.querySelector('#hip1');
let hip2 = document.querySelector('#hip2');
let hip3 = document.querySelector('#hip3');
let hip4 = document.querySelector('#hip4');
let hip5 = document.querySelector('#hip5');
let hip6 = document.querySelector('#hip6');

window.addEventListener('scroll', function () {
    let hipFunction = window.scrollY;

    if(hipFunction > 7200) {
        hip1.classList.add("active1");
    } else {
        hip1.classList.remove("active1");
    }

    if(hipFunction > 7360) {
        hip2.classList.add("active2");
    } else {
        hip2.classList.remove("active2");
    }

    if(hipFunction > 7540) {
        hip3.classList.add("active3");
    } else {
        hip3.classList.remove("active3");
    }

    if(hipFunction > 7730) {
        hip4.classList.add("active4");
    } else {
        hip4.classList.remove("active4");
    }

    if(hipFunction > 7860) {
        hip5.classList.add("active5");
    } else {
        hip5.classList.remove("active5");
    }

    if(hipFunction > 8030) {
        hip6.classList.add("active6");
    } else {
        hip6.classList.remove("active6");
    }

})


















