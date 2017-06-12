import moduleIntro from './templates/intro.js';
import moduleGreeting from './templates/greeting.js';
import moduleRules from './templates/rules.js';
import moduleGame1 from './templates/game-1.js';
import moduleGame2 from './templates/game-2.js';
import moduleGame3 from './templates/game-3.js';
import moduleStats from './templates/stats.js';

const constructor = () => {
  let intro = document.createElement(`div`);
  intro.innerHTML = moduleIntro;
  let firstChild = document.querySelector(`.central`).firstChild;
  document.querySelector(`.central`).insertBefore(intro, firstChild);
  document.querySelector(`#greeting`).innerHTML = moduleGreeting;
  document.querySelector(`#rules`).innerHTML = moduleRules;
  document.querySelector(`#game-1`).innerHTML = moduleGame1;
  document.querySelector(`#game-2`).innerHTML = moduleGame2;
  document.querySelector(`#game-3`).innerHTML = moduleGame3;
  document.querySelector(`#stats`).innerHTML = moduleStats;
};

export default constructor;


