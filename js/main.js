import constructor from './modules/module_constructor.js';

(function () {
  // Construct templates
  constructor();
  let central = document.querySelector(`.central`);
  let temps = document.querySelectorAll(`template`);
  let tempsArr = [];
  let linksArr = [];
  // Attach data-attributes for future scrolling
  for (let i = 0; i < temps.length; i++) {
    temps[i].setAttribute(`data-gallery-slide`, `` + (i + 1));
  }
  // Function for making modules
  Array.prototype.push.apply(tempsArr, temps);
  linksArr = tempsArr.map(function (temp) {
    // Pushing all links Next and Back to temps array for future use
    return temp.content.querySelectorAll(`img[alt='Next'], img[alt='Back']`);
  });
  // Function for displaying screens
  const show = (slide) => {
    let clone = document.importNode(slide.content, true);
    let firstChild = document.querySelector(`.central`).firstChild;
    firstChild.replaceWith(clone);
  };
  let i = 1;
  // Attach click listeners for switching between screens
  central.addEventListener(`click`, function (e) {
    let introTemplate = document.querySelector(`template[data-gallery-slide="1"`);
    let currentTemplate = document.querySelector(`template[data-gallery-slide="${i}"`);
    let currentPos = +currentTemplate.getAttribute(`data-gallery-slide`);
    let nextTemplate = document.querySelector(`template[data-gallery-slide="${currentPos + 1}"]`);
    let nextPos = nextTemplate.getAttribute(`data-gallery-slide`);
    if (e.target === document.querySelector(`.intro__asterisk`)) {
      i = nextPos;
      show(nextTemplate);
    }
    if (e.target === document.querySelector(`img[alt='Next']`)) {
      show(nextTemplate);
    }
    if (e.target === document.querySelector(`img[alt='Back']`)) {
      show(introTemplate);
      i = 1;
    }
    return false;
  });
   // for (let i = 0; i++; i < tempsArr.length) {
   //  if (tempsArr[i][0].alt === `Next`) {
   //    document.querySelector(`img`).addEventListener(`click`, function () {
   //      show(document.)
   //    })
   //  }
  // }
})();
