let a = 0;

const images = document.querySelectorAll('.slider-image');

const toggle = () => {
  images[a].classList.toggle('slider-image--js');
  a = a + 1;
  images[a].classList.toggle('slider-image--js');
};

export { toggle };

// toggle();
// import { toggle } from './slider.js';
