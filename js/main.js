import moduleIntro from './modules/templates/intro.js';
import moduleGreeting from './modules/templates/greeting.js';
import moduleRules from './modules/templates/rules.js';
import moduleGame1 from './modules/templates/game-1.js';
import moduleGame2 from './modules/templates/game-2.js';
import moduleGame3 from './modules/templates/game-3.js';
import moduleStats from './modules/templates/stats.js';

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
  document.querySelector(`#game-1`).innerHTML = moduleGame1;
  document.querySelector(`#game-2`).innerHTML = moduleGame2;
  document.querySelector(`#game-3`).innerHTML = moduleGame3;
  document.querySelector(`#stats`).innerHTML = moduleStats;


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

