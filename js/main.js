
import {templateIntro} from './modules/templates/intro.js';
// import './modules/templates/greeting.js';
// import './modules/templates/rules.js';
// import './modules/templates/game-1.js';
// import './modules/templates/game-2.js';
// import './modules/templates/game-3.js';
// import './modules/templates/stats.js';


(function () {
  templateIntro();
  let temps = document.querySelectorAll(`template`);
  let tempsArr = [];
  // Attach data-attributes for future scrolling
  for (let i = 0; i < temps.length; i++) {
    temps[i].setAttribute(`data-gallery-slide`, `` + (i + 1));
  }
  // Function for links
  Array.prototype.push.apply(tempsArr, temps);
  tempsArr.map(function (temp) {
    // Pushing all links Next and Back to temps array for future use
    return temp.content.querySelectorAll(`img[alt='Next'], img[alt='Back']`);
  });
})();
