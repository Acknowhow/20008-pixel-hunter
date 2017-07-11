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

const preload = function (...args) {
  if (localStorage.getItem(`savedimgs`) === null) {
    const images = [];
    for (let i = 0; i < args.length; i++) {
      images[]
    }
  }
}
// export const preload = function (...args) {
//   if (localStorage.getItem(`savedimgs`) === null) { //
//     args = shuffle(args[0]);
//     const images = [];
//     for (let i = 0; i < args.length; i++) {
//       images[i] = new Image();
//       images[i] = args[i][1];
//     }
//     let stored = JSON.stringify(images);
//     localStorage.setItem(`savedimgs`, stored);
//     return images;
//   }
//   const shuffleSaved = shuffle(JSON.parse(localStorage.getItem(`savedimgs`)));
//   return shuffleSaved;
// };


