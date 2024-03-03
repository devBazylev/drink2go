import { burgerHandler } from './burger.js';
import { changePrice } from './no-ui-slider.js';

burgerHandler();
changePrice();

const image = document.querySelector('.slider-image');
const inputs = document.querySelectorAll('.slider-input');

let index = 0;
let path = image.src;

const changeId = function () {
  index = this.id;
  path = path.replace(/slide-[0-2]/, `slide-${index}`);
  // console.log(path);
};

inputs.forEach((element) => {
  element.addEventListener('change', changeId);
});
