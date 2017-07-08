const images = [];
const preload = function () {
  for (let i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
};
preload(
    `http://domain.tld/gallery/image-001.jpg`,
    `http://domain.tld/gallery/image-002.jpg`,
    `http://domain.tld/gallery/image-003.jpg`
);
