import { burgerHandler } from './burger.js';
import { changePrice } from './no-ui-slider.js';
import { changeAllPaths } from './slider.js';

const inputs = document.querySelectorAll('.slider-input');

burgerHandler();
changePrice();

inputs.forEach((element) => {
  element.addEventListener('change', changeAllPaths);
});
