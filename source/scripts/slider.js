const image = document.querySelector('.slider__image');
const sources = Array.from(document.querySelectorAll('.slider__picture'));
const inputs = document.querySelectorAll('.slider-input');
const prev = document.querySelector('.slider-button-prev');
const next = document.querySelector('.slider-button-next');

let index = 0;
let pathImg = image.src;
let pathImgMinor = image.srcset;

const changePaths = function () {
  pathImg = pathImg.replace(/slide-[0-2]/, `slide-${index}`);
  pathImgMinor = pathImgMinor.replace(/slide-[0-2]/, `slide-${index}`);
  image.setAttribute('src', pathImg);
  image.setAttribute('srcset', pathImgMinor);
  sources.forEach((source) => {
    const sourcePath = source.srcset.replace(/slide-[0-2]/g, `slide-${index}`);
    source.setAttribute('srcset', sourcePath);
  });
};

const setDis = (element) => {
  element.setAttribute('disabled', '');
};

const remDis = (element) => {
  element.removeAttribute('disabled', '');
};

const checkRadio = () => {
  inputs[index].checked = true;
};

const checkState = function () {
  if (+index === 0) {
    setDis(prev);
    remDis(next);
  }
  if (+index === 1) {
    remDis(prev);
    remDis(next);
  }
  if (+index === 2) {
    setDis(next);
    remDis(prev);
  }
};

const onInput = function () {
  index = this.id;
  changePaths();
  checkState();
};

const onPrevButton = () => {
  if (index >= 1 && index <= 2) {
    index --;
    changePaths();
    checkRadio();
    remDis(next);
  }
  if (index === 0) {
    setDis(prev);
  }
};

const onNextButton = () => {
  if (index >= 0 && index <= 1) {
    index ++;
    changePaths();
    checkRadio();
    remDis(prev);
  }
  if (index === 2) {
    setDis(next);
  }
};

prev.addEventListener('click', onPrevButton);
next.addEventListener('click', onNextButton);

export { onInput };
