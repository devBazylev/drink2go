const image = document.querySelector('.slider__image');
const sources = Array.from(document.querySelectorAll('.slider__picture'));

let index = 0;
let pathImg = image.src;
let pathImgMinor = image.srcset;

const changeAllPaths = function () {
  index = this.id;
  pathImg = pathImg.replace(/slide-[0-2]/, `slide-${index}`);
  pathImgMinor = pathImgMinor.replace(/slide-[0-2]/, `slide-${index}`);
  image.setAttribute('src', pathImg);
  image.setAttribute('srcset', pathImgMinor);
  sources.forEach((source) => {
    const sourcePath = source.srcset.replace(/slide-[0-2]/g, `slide-${index}`);
    source.setAttribute('srcset', sourcePath);
  });
};

export { changeAllPaths };
