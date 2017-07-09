import {paintings} from './../data/imagesData';
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
}
export const preload = function (...args) {
  args = shuffle(args[0]);
  const images = [];
  for (let i = 0; i < args.length; i++) {
    images[i] = new Image();
    images[i].src = args[i][1];
  }
  return images;
};

export const imgContainer = window.onload = preload(paintings.people);

