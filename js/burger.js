const burgerMenu = document.querySelector('.header__burger');
const listContainer = document.querySelector('.header__listcontainer');
const overlay = document.querySelector('.header__burgeroverlay')
const cross = document.querySelector('.mobile__cross');
const links = document.querySelectorAll('.lilink');
const login = document.querySelector('.header__btn');
const loginmobile = document.querySelector('#login__mobile');

function menuClick(e) {
    e.preventDefault();
    burgerMenu.classList.toggle('_active')
    listContainer.classList.toggle('_active');
    overlay.classList.toggle('_active');
    cross.classList.remove('_active');
}

function linkClick(e) {
    burgerMenu.classList.toggle('_active')
    listContainer.classList.toggle('_active');
    overlay.classList.toggle('_active');
    cross.classList.remove('_active');
}

burgerMenu.addEventListener("click", menuClick);
cross.addEventListener("click", menuClick);
overlay.addEventListener("click", menuClick);
links.forEach(item => item.addEventListener("click", linkClick));
