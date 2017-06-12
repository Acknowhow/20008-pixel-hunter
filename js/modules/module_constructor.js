import moduleIntro from './templates/intro.js';
import moduleGreeting from './templates/greeting.js';
import moduleRules from './templates/rules.js';
import moduleGame1 from './templates/game-1.js';
import moduleGame2 from './templates/game-2.js';
import moduleGame3 from './templates/game-3.js';
import moduleStats from './templates/stats.js';

const constructor = () => {
  let intro = document.createElement(`template`);
  intro.id = `introduction`;
  intro.innerHTML = moduleIntro;
  document.querySelector(`#greeting`).before(intro);
  let clone = document.importNode(intro.content, true);
  let firstChild = document.querySelector(`.central`).firstChild;
  document.querySelector(`.central`).insertBefore(clone, firstChild);
  document.querySelector(`#greeting`).innerHTML = moduleGreeting;
  document.querySelector(`#rules`).innerHTML = `<div>${moduleRules}</div>`;
  document.querySelector(`#game-1`).innerHTML = `<div>${moduleGame1}</div>`;
  document.querySelector(`#game-2`).innerHTML = moduleGame2;
  document.querySelector(`#game-3`).innerHTML = moduleGame3;
  document.querySelector(`#stats`).innerHTML = moduleStats;
};

export default constructor;


