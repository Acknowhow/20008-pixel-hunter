import constructor from './modules/module_constructor.js';

(function () {
  let central = document.querySelector(`.central`);
  let temps = document.querySelectorAll(`template`);
  let tempsArr = [];
  let linksArr = [];
  // Construct templates
  constructor();
  // Attach data-attributes for future scrolling
  for (let i = 0; i < temps.length; i++) {
    document.querySelector(`#main`).setAttribute(`data-gallery-slide`, `` + 0);
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
    firstChild.style.display = `none`;
    document.querySelector(`.central`).insertBefore(clone, firstChild);
  }
  // Attach click listeners for switching between screens
  central.addEventListener(`click`, function (e) {
    if (e.target === document.querySelector(`.intro__asterisk`)) {
      let initial = +document.querySelector(`#main`).getAttribute(`data-gallery-slide`);
      let next = document.querySelector(`template[data-gallery-slide="${initial + 1}"]`);
      show(next);
    }
    // if (e.target === document.querySelector(`img[alt='Next']`)) {
    //   show(document.querySelector(`#rules`));
    //    // document.querySelector(`.rules__input`).addEventListener(`input`, function (e) {
    //    //  if(this.value !== '') document.querySelector(`.rules__button`)
    //    // })
    //    // }
    // }
    // if (e.target === document.querySelector(`.rules__button`)) {
    // }
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
