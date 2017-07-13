import {paintings} from './../data/imageData';
const entries = (obj) => {
  const container = {};
  return function () {
    [...Object.entries(obj)].map(([key, index]) =>{
      container[key] = new Map(index);

    });
    return container;
  };
};

const paintingsMapped = entries(paintings)();
const mapKey = (someKey) => {
  const paintingsLoaded = {
  };
  paintingsMapped[someKey].forEach((value, key) => {
    let img = document.createElement(`img`);
    img.src = value;
    img.alt = key;
    paintingsLoaded[key] = img;
  });
  return paintingsLoaded;
};
let peoplePaintingsImgs = mapKey(`peoplePaintings`);
let animalsPaintingsImgs = mapKey(`animalsPaintings`);
let itemsPaintingsImgs = mapKey(`itemsPaintings`);
let fruitsPaintingsImgs = mapKey(`fruitsPaintings`);
let dishesPaintingsImgs = mapKey(`dishesPaintings`);
export const imgsObj = {
  peoplePaintings: peoplePaintingsImgs,
  animalsPaintings: animalsPaintingsImgs,
  itemsPaintings: itemsPaintingsImgs,
  fruitsPaintings: fruitsPaintingsImgs,
  dishesPaintings: dishesPaintingsImgs
};
