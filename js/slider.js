const btnLeft = document.querySelector('#btnleft');
const btnRight = document.querySelector('#btnright');
const invisLeft = document.querySelector('.invis__left');
const invisRight = document.querySelector('.invis__right');
const destGallery = document.querySelector('.destinations__gallery');
const circles = document.querySelectorAll('.destinations__circleitem');
const screenWidth = window.screen.width;
let offset = 0;
let offsetw = -37.5;
let circleIndex = 0;
console.log(offsetw);

btnLeft.addEventListener('click', function () {
    offset = offset + 100.5;
    circleIndex++
    if (offset > 300) {
        offset = 0;
        circleIndex = 0
    };
    destGallery.style.left = -offset + '%';
    activeSlide(circleIndex);
});

invisLeft.addEventListener('click', function () {
    offsetw = offsetw + 60;
    circleIndex++
    if (offsetw > 22.5) {
        offsetw = 22.5;
        circleIndex = 0
    };
    destGallery.style.left = offsetw + '%';
    console.log(offsetw);
    activeSlide(circleIndex);
});


btnRight.addEventListener('click', function () {
    offset = offset - 100.5;
    circleIndex--
    if (offset < 0) {
        offset = 201;
        circleIndex = 2;
    }
    destGallery.style.left = -offset + '%';
    activeSlide(circleIndex);
});

invisRight.addEventListener('click', function () {
    offsetw = offsetw - 60;
    circleIndex++
    if (offsetw < -97.5) {
        offsetw = -97.5;
        circleIndex = 0
    };
    console.log(offsetw);
    destGallery.style.left = offsetw + '%';
    activeSlide(circleIndex);
});

circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        if (screenWidth <= 489) {
            offset = 100.5 * index
            destGallery.style.left = -offset + '%';
        }
        else {
            offsetw = 33.3* index
            destGallery.style.left = -offsetw + '%';
        }
        circleIndex = index;
        activeSlide(circleIndex);
    })

})

const activeSlide = (index) => {
        for (let circle of circles) {
            circle.classList.remove('circle__active')
        }
        circles[index].classList.add('circle__active')
    };





// const animationName = document.querySelectorAll

// function swipeRight() {
//     destGallery.classList.toggle('transition-left');
// }

// function swipeLeft() {
//     destGallery.classList.toggle('transition-right');
// }

// destGallery.addEventListener('animationend', () => {
// destGallery.classList.remove("transition-left")
// destGallery.classList.remove("transition-right")
// })


// btnLeft.addEventListener("click", swipeLeft);
// btnRight.addEventListener("click", swipeRight);

// invisLeft.addEventListener("click", swipeRight);
// invisRight.addEventListener("click", swipeLeft);

// destGallery.addEventListener('animationend', blockDoubleClick);