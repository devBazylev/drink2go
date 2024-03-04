import { burgerHandler } from './burger.js';
import { changePrice } from './no-ui-slider.js';
import { onInput } from './slider.js';

const inputs = document.querySelectorAll('.slider-input');

burgerHandler();
changePrice();

inputs.forEach((element) => {
  element.addEventListener('change', onInput);
});
