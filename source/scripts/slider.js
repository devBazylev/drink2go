const image = document.querySelector('.slider__image');
const sources = Array.from(document.querySelectorAll('.slider__picture'));
const inputs = document.querySelectorAll('.slider-input');
const prev = document.querySelector('.slider-button-prev');
const next = document.querySelector('.slider-button-next');
const section = document.querySelector('.hero');
const title = document.querySelector('.hero__title');
const paragraph = document.querySelector('.hero__text');
const oldPrice = document.querySelector('.hero__price-old');
const price = document.querySelector('.hero__price');

const data = [
  { title: 'Декаф Флэт Уайт', paragraph: 'Свежесваренный кофе без кофеина из Эфиопии с натуральным фермерским молоком — то, что нужно для расслабления после тяжёлого рабочего дня', oldPrice: '295₽', price: '225₽', backgroundColor: '#F3EBE1'},
  { title: 'Лавандовый Латте', paragraph: 'Невероятное сочетание перуанской высокогорной арабики с молоком ламы и лавандовым сиропом унесёт вас прямо на вершину Радужных гор', oldPrice: '285₽', price: '265₽', backgroundColor: '#EAE6FC'},
  { title: 'Тройной Эспрессо', paragraph: 'Мощнее укола адреналина, чернее самой тёмной ночи, этот тройной эспрессо из Колумбии покажет вам, что такое настоящая бодрость', oldPrice: '395₽', price: '375₽', backgroundColor: '#E5E6E8'},
];

let index = 0;
let pathImg = image.src;
let pathImgMinor = image.srcset;

const changeData = () => {
  title.textContent = data[index].title;
  paragraph.textContent = data[index].paragraph;
  oldPrice.textContent = data[index].oldPrice;
  price.textContent = data[index].price;
  section.style.background = data[index].backgroundColor;
};

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

const changeState = function () {
  if (index === 0) {
    remDis(next);
    setDis(prev);
  }
  if (index === 1) {
    remDis(prev);
    remDis(next);
  }
  if (index === 2) {
    remDis(prev);
    setDis(next);
  }
};

const onInput = function () {
  index = +this.id;
  changePaths();
  changeState();
  changeData();
};

const onPrevButton = () => {
  if (index >= 1 && index <= 2) {
    index --;
    changePaths();
    checkRadio();
    changeData();
  }
  changeState();
};

const onNextButton = () => {
  if (index >= 0 && index <= 1) {
    index ++;
    changePaths();
    checkRadio();
    changeData();
  }
  changeState();
};

prev.addEventListener('click', onPrevButton);
next.addEventListener('click', onNextButton);
inputs.forEach((element) => {
  element.addEventListener('change', onInput);
});

export { };
