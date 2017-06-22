// let temps = document.querySelectorAll(`template`);
// // Attach data-attributes for future scrolling
// for (let i = 0; i < temps.length; i++) {
//   temps[i].setAttribute(`data-gallery-slide`, `` + (i + 1));
// }
export const central = document.querySelector(`.central`);
// Function for making templates
export const makeTemplate = (module, id, prevEl) =>{
  const container = document.createElement(`template`);
  container.id = id;
  container.innerHTML = module;
  prevEl.after(container);
};
// Function for displaying templates
export const show = (slide) => {
  const clone = document.importNode(slide.content, true);
  while (central.firstChild) {
    central.removeChild(central.firstChild);
  }
  central.appendChild(clone);
};


// export let i = 1;
// // // Attach click listeners for switching between screens
// // document.querySelector(`.central`).addEventListener(`click`, function (e) {
// export const introTemplate = document.querySelector(`template[data-gallery-slide="1"`);
// export const asterisk = document.querySelector(`.intro__asterisk`);
// export const nextLink = document.querySelector(`img[alt='Next']`);
// export const currentTemplate = document.querySelector(`template[data-gallery-slide="${i}"`);
// export const currentPos = +currentTemplate.getAttribute(`data-gallery-slide`);
// export const nextTemplate = document.querySelector(`template[data-gallery-slide="${currentPos + 1}"]`);
// export const nextPos = nextTemplate.getAttribute(`data-gallery-slide`);
// Rules
// const rulesInput = document.querySelector(`.rules__input`);
// const rulesButton = document.querySelector(`.rules__button`);
// Game-1
// const gameContent = document.querySelector(`.game__content`);
// const option1Array = [];
// const option2Array = [];
// let option1;
// let option2;
// const answersArr = [];
// Array.prototype.push.apply(answersArr, answers);
// if (e.target === asterisk) {
//    i = nextPos;
//    show(nextTemplate);
//  }
// if (e.target === nextLink) {
//   i = nextPos;
//   show(nextTemplate);
// }
// if (e.target === rulesInput) {
//   document.querySelector(`.rules__input`).addEventListener(`input`, function () {
//     if (rulesButton.hasAttribute(`disabled`)) {
//       rulesButton.removeAttribute(`disabled`);
//     }
//   });
// }
// if (e.target === rulesButton) {
//   e.preventDefault();
//   i = nextPos;
//   show(nextTemplate);
// }
// if (e.target.tagName === `SPAN`) {
//   const option1Answers = document.querySelector(`.game__content`).children[0].querySelectorAll(`label`);
//   const option2Answers = document.querySelector(`.game__content`).children[1].querySelectorAll(`label`);
//   const checkAnswers = (targ, arr) => {
//     if (!targ.getAttribute(`checked`)) {
//       targ.setAttribute(`checked`, `true`);
//     }
//     const checked = (t) => {
//       return t.getAttribute(`checked`);
//     };
//     if (arr.some(checked)) {
//       return true;
//     }
//     return false;
//   };
//   Array.prototype.push.apply(option1Array, option1Answers);
//   Array.prototype.push.apply(option2Array, option2Answers);
//   let target = e.target;
//   if (target.tagName !== `SPAN`) {
//     return;
//   }
//   if (target in option1Answers) {
//     option1 = checkAnswers(target, option1Answers);
//   }
//   option2 = checkAnswers(target, option2Answers);
//   if (option1 && option2) {
//     show(document.querySelector(`template[data-gallery-slide="1"]`));
//   }
// }
// if (e.target === document.querySelector(`img[alt='Back']`)) {
//   show(introTemplate);
//   i = 1;
// }
// });


