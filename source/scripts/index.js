const nav = document.querySelector('.header__navigation');
const burger = document.querySelector('.header__toggle');

burger.onclick = function() {
  nav.classList.toggle('header__navigation--closed');
  nav.classList.toggle('header__navigation--opened');
};
