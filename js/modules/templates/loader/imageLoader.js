import {paintings} from './../data/imagesData';
import {photos} from './../data/imagesData';
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
const photosMapped = entries(photos)();
export const paintingsMapKey = (someKey) => {
  const paintingsLoaded = {
  }
  paintingsMapped[someKey].forEach((value, key) => {
    let img = document.createElement(`img`);
    img.src = value;
    img.alt = key;
    paintingsLoaded[key] = img;
  });
  return paintingsLoaded;
};
export const photosMapKey = (someKey) => {
  const photosLoaded = {
  }
  photosMapped[someKey].forEach((value, key) => {
    let img = document.createElement(`img`);
    img.src = value;
    img.alt = key;
    photosLoaded[key] = img;
  });
  return photosLoaded;
};
