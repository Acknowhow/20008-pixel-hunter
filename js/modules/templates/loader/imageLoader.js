import {images} from './../data/imageData';
const entries = (obj) => {
  const container = {};
  return function () {
    [...Object.entries(obj)].map(([key, index]) =>{
      container[key] = new Map(index);

    });
    return container;
  };
};
const imagesMapped = entries(images)();
const mapKey = (someKey) => {
  const paintingsLoaded = {
  };
  imagesMapped[someKey].forEach((value, key) => {
    let img = document.createElement(`img`);
    img.src = value;
    img.alt = key;
    paintingsLoaded[key] = img;
  });
  return paintingsLoaded;
};

const peoplePaint = window.onload = mapKey(`peoplePaint`);
const animalPaint = window.onload = mapKey(`animalPaint`);
const itemPaint = window.onload = mapKey(`itemPaint`);
const fruitPaint = window.onload = mapKey(`fruitPaint`);
const dishPaint = window.onload = mapKey(`dishPaint`);
const peoplePhoto = window.onload = mapKey(`peoplePhoto`);
const animalPhoto = window.onload = mapKey(`animalPhoto`);
const itemPhoto = window.onload = mapKey(`itemPhoto`);
const fruitPhoto = window.onload = mapKey(`fruitPhoto`);
const dishPhoto = window.onload = mapKey(`dishPhoto`);

export const imgLoaded = Object.freeze({
  'screen-1': {
    paint: peoplePaint[`Man bearded`],
    photo: peoplePhoto[`Morgan Freeman`]
  },
  'screen-2': {
    paint: animalPaint[`Lizard`],
    photo: animalPhoto[`Cheetah`]
  },
  'screen-3': {
    paint: itemPaint[`Metal spheres`],
    photo: itemPhoto[`Books abstract`]
  },
  'screen-4': {
    paint: fruitPaint[`Watermelon`],
    photo: fruitPhoto[`Figs`]
  },
  'screen-5': {
    paint: peoplePaint[`Woman showered`],
    photo: peoplePhoto[`Ethiopian girl`],
  },
  'screen-6': {
    paint: animalPaint[`Spider`],
    photo: animalPaint[`Bumble bee`],
  },
  'screen-7': {
    paint: peoplePaint[`Girls sitting`],
    photo: peoplePhoto[`Girl homeless`],
  },
  'screen-8': {
    paint: fruitPaint[`Pomegranate`],
    photo: fruitPhoto[`Apple tree`],
  },
  'screen-9': {
    paint: dishPaint[`Plates`],
    photo: dishPhoto[`Mug`],
  },
  'screen-10': {
    paint: peoplePaint[`Woman thoughtful`],
    photo: peoplePhoto[`Grandma Indian`]
  }
});
