import introTemplate from './templates/intro.js';
import greetingTemplate from './templates/greeting.js';
import templateRules from './templates/rules.js';
import game1Template from './templates/game-1.js';
import game2Template from './templates/game-2.js';
import moduleGame3 from './templates/game-3.js';
import moduleStats from './templates/stats.js';

const constructor = () => {
  document.querySelector(`#game-3`).innerHTML = moduleGame3;
  document.querySelector(`#stats`).innerHTML = moduleStats;
};

export default constructor;


