import constructor from './modules/module_constructor.js';

(function () {
  let main = document.querySelector(`#main`);
  let central = document.querySelector(`.central`);
  let temps = document.querySelectorAll(`template`);
  let tempsArr = [];
  let linksArr = [];
  // Function for making modules
  constructor();
  Array.prototype.push.apply(tempsArr, temps);
  linksArr = tempsArr.map(function (temp) {
    // Pushing all links Next and Back to temps array for future use
    return temp.content.querySelectorAll(`img[alt='Next'], img[alt='Back']`);
  });
  const show = (slide) => {
    // let mainArr = [main, footer];
    let content = slide.content;
    // Clone template content
    let clone = document.importNode(content, true);
    central.children[0].style.display = `none`;
    central.insertBefore(clone, central.children[0]);
  }
  // Greeting
  central.addEventListener(`click`, function (e) {
    if (e.target === document.querySelector(`.intro__asterisk`)) {
      show(document.querySelector(`#greeting`));
    }
    if (e.target === document.querySelector(`img[alt='Next']`)) {
      show(document.querySelector(`#rules`));
    }
    return false;
  });
  // for (let i = 0; i++; i < tempsArr.length) {
  //   if (tempsArr[i][0].alt === `Next`) {
  //     document.querySelector(`img`).addEventListener(`click`, function () {
  //       show(document.)
  //     })
  //   }
  // }
})();
