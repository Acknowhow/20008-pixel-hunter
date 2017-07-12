import {paintings} from './../data/imagesData';
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
export const mapKey = (someKey) => {
  const paintingsLoaded = {
  }
  paintingsMapped[someKey].forEach((value, key) => {
    let img = document.createElement(`img`);
    img.src = value;
    img.alt = key;
    paintingsLoaded[key] = img;
  });
  return paintingsLoaded;
}

