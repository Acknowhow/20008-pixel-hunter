import {paintings} from './../data/imagesData';
import {photos} from './../data/imagesData';
const shuffle = (array) => {
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};
export const preload = function (...args) {
  if (localStorage.getItem(`savedimgs`) !== null) { //
    args = shuffle(args[0]);
    const images = [];
    for (let i = 0; i < args.length; i++) {
      images[i] = new Image();
      images[i] = args[i][1];
    }
    let stored = JSON.stringify(images);
    localStorage.setItem(`savedimgs`, stored);
    return images;
  }
  const shuffleSaved = shuffle(JSON.parse(localStorage.getItem(`savedimgs`)));
  return shuffleSaved;
};

export const paintingsPeople = window.onload = preload(paintings.people);
export const paintingsAnimals = window.onload = preload(paintings.animals);
export const paintingsItems = window.onload = preload(paintings.items);
export const paintingsFruits = window.onload = preload(paintings.fruits);
export const paintingsDishes = window.onload = preload(paintings.dishes);
export const photosPeople = window.onload = preload(photos.people);
export const photosAnimals = window.onload = preload(photos.animals);
export const photosItems = window.onload = preload(photos.items);
export const photosFruits = window.onload = preload(photos.fruits);
export const photosDishes = window.onload = preload(photos.dishes);

