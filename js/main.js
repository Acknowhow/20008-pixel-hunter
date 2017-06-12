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
  // Function for links
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
    const introTemplate = document.querySelector(`template[data-gallery-slide="1"`);
    const currentTemplate = document.querySelector(`template[data-gallery-slide="${i}"`);
    const currentPos = +currentTemplate.getAttribute(`data-gallery-slide`);
    const nextTemplate = document.querySelector(`template[data-gallery-slide="${currentPos + 1}"]`);
    const nextPos = nextTemplate.getAttribute(`data-gallery-slide`);
    const rulesInput = document.querySelector(`.rules__input`);
    const rulesButton = document.querySelector(`.rules__button`);
    if (e.target === document.querySelector(`.intro__asterisk`)) {
      i = nextPos;
      show(nextTemplate);
    }
    if (e.target === document.querySelector(`img[alt='Next']`)) {
      i = nextPos;
      show(nextTemplate);
    }
    if (e.target === rulesInput) {
      document.querySelector(`.rules__input`).addEventListener(`input`, function () {
        if (rulesButton.hasAttribute(`disabled`)) {
          rulesButton.removeAttribute(`disabled`);
        }
      });
    }
    if (e.target === rulesButton) {
      e.preventDefault();
      i = nextPos;
      show(nextTemplate);
    }
    if (e.target === document.querySelector(`img[alt='Back']`)) {
      show(introTemplate);
      i = 1;
    }
    return false;
  });
  // Rules input
  // if (document.querySelector(`.rules__input`)) {
  //   let rulesDescription = document.querySelector(`.rules__description`);
  //   const checkSelects = (targ, Arr) =>{
  //     if (!targ.getAttribute(`checked`)) {
  //       targ.setAttribute(`checked`, `true`);
  //     }
  //     const checked = (t) => {
  //       return t.getAttribute(`checked`);
  //     };
  //     if (Arr.every(checked)) {
  //       show(document.querySelector(`template[data-gallery-slide="4"]`));
  //     }
  //   };
  //   rulesDescription.addEventListener(`click`, function (e) {
  //     const targetsArr = [];
  //     const targets = rulesDescription.querySelectorAll(`img`);
  //     Array.prototype.push.apply(targetsArr, targets);
  //     let target = e.target;
  //     if (target.tagName !== `IMG`) {
  //       return;
  //     }
  //     checkSelects(target, targetsArr);
  //   });
  // }
})();
