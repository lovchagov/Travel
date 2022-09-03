const popup = document.querySelector('.popup');
const popupOverlay = document.querySelector('.popup__overlay');
const popupWindow = document.querySelector('.popup__window');
const popupForm = document.getElementById('popup__form');
const switchMethod = document.getElementById('popup_registerlink');
const switchWindow = document.querySelector('.popup__top');
const popupTitle = document.querySelector('.popup__title');
const signButton = document.querySelector('.popup__signinbutton > button');
const registerLabel = document.querySelector('.popup__register > span');
const popupForgot = document.querySelector('.popup__forgot > a');


popupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(popupForm);
    const email = formData.get('E-mail');
    const password = formData.get('Password');
    email.length > 0 && password.length > 0
        ? alert('Показываю красивое:\n' + 'E-mail: ' + email + '\n' + 'Password: ' + password)
        : alert('Сначала введи данные, чтобы было что показать!');
});


function loginClick(e) {
    e.preventDefault();
    popup.classList.toggle('_active');
    popupWindow.classList.toggle('_active');
    
}

function loginmoblieClick(e) {
    burgerMenu.classList.toggle('_active')
    listContainer.classList.toggle('_active');
    overlay.classList.toggle('_active');
    cross.classList.remove('_active');
    popup.classList.toggle('_active');
    popupWindow.classList.toggle('_active');

};

function registerClick(e) {
    e.preventDefault();
    switchWindow.classList.toggle('_register');
    popupWindow.classList.toggle('_register');

    function replaceText(item, first, second) {
        item.innerHTML === second
            ? item.innerHTML = first
            : item.innerHTML = second
    }

    replaceText(popupTitle, "Log in to your account", "Create account");
    replaceText(signButton, "Sign in", "Sign Up");
    replaceText(registerLabel, "Don't have an account?", "Already have an account?");
    replaceText(switchMethod, "Register", "Log in");
    replaceText(popupForgot, "Forgot Your Password?", "");

};

login.addEventListener("click", loginClick);
loginmobile.addEventListener("click", loginmoblieClick);
popupOverlay.addEventListener("click", loginClick);
switchMethod.addEventListener("click", registerClick);