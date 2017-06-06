import moduleIntro from './modules/templates/intro.js';
import moduleGreeting from './modules/templates/greeting.js';
import moduleRules from './modules/templates/rules.js';

(function () {

  // let central = document.querySelector(`.central`);
  // let main = document.querySelector(`#main`);
  // let footer = document.querySelector(`.central .footer`);
  // let greeting = document.querySelector(`#greeting`);
  // let temps = document.querySelectorAll(`template`);
  // let tempsArr = [];

  document.querySelector(`#main`).innerHTML = moduleIntro;
  document.querySelector(`#greeting`).innerHTML = moduleGreeting;
  document.querySelector(`#rules`).innerHTML = moduleRules;


  // Array.prototype.push.apply(tempsArr, temps);
  // tempsArr = tempsArr.map(function (temp) {
  //   // Pushing all links Next and Back to temps array
  //   return temp.content.querySelectorAll(`img[alt='Next'], img[alt='Back']`);
  // });
  // function show(slide) {
  //   let mainArr = [main, footer];
  //   let content = slide.content;
  //   // Clone template content
  //   let clone = document.importNode(content, true);
  //   mainArr.forEach(function (selector) {
  //     selector.style.display = `none`;
  //   });
  //   central.appendChild(clone);
  // }
  // // Greeting
  // show(greeting);
})();

