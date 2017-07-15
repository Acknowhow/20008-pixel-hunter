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

const peoplePaintImg = mapKey(`peoplePaint`);
const animalsPaintImg = mapKey(`animalsPaint`);
const itemsPaintImg = mapKey(`itemsPaint`);
const fruitsPaintImg = mapKey(`fruitsPaint`);
const dishesPaintImg = mapKey(`dishesPaint`);
const peoplePhotoImg = mapKey(`peoplePhoto`);
const animalsPhotoImg = mapKey(`animalsPhoto`);
const itemsPhotoImg = mapKey(`itemsPhoto`);
const fruitsPhotoImg = mapKey(`fruitsPhoto`);
const dishesPhotoImg = mapKey(`dishesPhoto`);

export const imgLoaded = Object.freeze({
  'screen-1': {
    paint: peoplePaintImg[`Man bearded`],
    photo: peoplePhotoImg[`Morgan Freeman`]
  },
  'screen-2': {
    paint: animalsPaintImg[`Lizard`],
    photo: animalsPhotoImg[`Cheetah`]
  },
  'screen-3': {
    paint: itemsPaintImg[`Metal spheres`],
    photo: itemsPhotoImg[`Books abstract`]
  },
  'screen-4': {
    paint: fruitsPaintImg[`Watermelon`],
    photo: fruitsPhotoImg[`Figs`]
  },
  'screen-5': {
    paint: peoplePaintImg[`Woman showered`],
    photo: peoplePhotoImg[`Ethiopian girl`],
  },
  'screen-6': {
    paint: animalsPaintImg[`Spider`],
    photo: animalsPaintImg[`Bumble bee`],
  },
  'screen-7': {
    paint: peoplePaintImg[`Girls sitting`],
    photo: peoplePhotoImg[`Girl homeless`],
  },
  'screen-8': {
    paint: fruitsPaintImg[`Pomegranate`],
    photo: fruitsPhotoImg[`Apple tree`],
  },
  'screen-9': {
    paint: dishesPaintImg[`Plates`],
    photo: dishesPhotoImg[`Mug`],
  },
  'screen-10': {
    paint: peoplePaintImg[`Woman thoughtful`],
    photo: peoplePhotoImg[`Grandma Indian`]
  }
});
