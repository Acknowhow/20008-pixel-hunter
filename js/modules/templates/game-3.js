import {templateHeader} from './header.js';
import {data} from './data.js';
import {templateFooter} from './footer.js';
import {makeTemplate} from './../module_constructor.js';
import {makeIntroTemplate} from './intro';
import {makeStatsTemplate} from './stats.js';
const templateGame3 = `
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;
export const makeGame3Template = () => {
  makeTemplate(templateGame3, templateFooter, templateHeader(data));
  const gameContent = document.querySelector(`.game__content`);
  const linkBack = document.querySelector(`.header__back`);
  const switchBack = (ev) => {
    if (ev.currentTarget === linkBack) {
      linkBack.removeEventListener(`click`, switchBack);
      makeIntroTemplate();
    }
  };
  const check = (ev) => {
    if (ev.target.classList.contains(`game__option`)) {
      makeStatsTemplate();
    }
    return false;
  };
  gameContent.addEventListener(`click`, check);
  linkBack.addEventListener(`click`, switchBack);
};
