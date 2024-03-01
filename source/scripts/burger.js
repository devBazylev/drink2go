const nav = document.querySelector('.header__navigation');
const burger = document.querySelector('.header__toggle');

const toggleMenu = () => {
  nav.classList.toggle('header__navigation--closed');
  nav.classList.toggle('header__navigation--opened');
};

const burgerHandler = () => {
  burger.addEventListener('click', toggleMenu);
};


export { burgerHandler };
