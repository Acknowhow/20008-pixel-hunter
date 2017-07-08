import imagesData from './../data/imagesData';
export const preload = function (...args) {
  const images = [];
  for (let i = 0; i < args.length; i++) {
    images[i] = new Image();
    images[i].src = args[i];
  }
  return images;
};
export const imgContainer = window.onload = preload(`http://i.imgur.com/egBvykv.jpg`);

