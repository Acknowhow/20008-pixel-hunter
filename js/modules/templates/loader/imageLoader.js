import {paintings} from './../data/imagesData';
const paintingsLoaded = {};
const entries = (obj) => {
  const container = {};
  return function () {
    [...Object.entries(obj)].map(([key, index]) =>{
      container[key] = new Map(index);

    });
    return container;
  };
};
// const shuffle = (array) => {
//   let m = array.length;
//   let t;
//   let i;
//   // While there remain elements to shuffle
//   while (m) {
//     // Pick a remaining element
//     i = Math.floor(Math.random() * m--);
//     // And swap it with the current element
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }
//   return array;
// };
const paintingsMapped = entries(paintings)();
paintingsMapped.animals.forEach((value, key) => {
  let img = document.createElement(`img`);
  img.src = value;
  img.alt = key;
  paintingsLoaded[key] = img;
}
);

