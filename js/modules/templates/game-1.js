import {showIntroTemplate} from './intro';
import {makeTemplate} from './../module_constructor.js';
import {show} from './../module_constructor.js';
import {makeGame2Template} from './game-2.js';
import {showGame2Template} from './game-2.js';
const moduleGame1 = `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">NN</h1>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    </div>
  </header>
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;
export const makeGame1Template = () => {
  makeTemplate(moduleGame1, `game-1`, document.querySelector(`#rules`));
};
export const showGame1Template = () => {
  show(document.querySelector(`#game-1`));
  // Select all inputs in option1
  const answers1 = document.querySelector(`.game__content`).children[0].querySelectorAll(`input`);
  // Select all inputs in option2
  const answers2 = document.querySelector(`.game__content`).children[1].querySelectorAll(`input`);
  const answers1Arr = [];
  const answers2Arr = [];
  const linkBack = document.querySelector(`.header__back`);
  Array.prototype.push.apply(answers1Arr, answers1);
  Array.prototype.push.apply(answers2Arr, answers2);
  const checkArr = (a) => {
    return a.checked === true;
  };
  document.querySelector(`.game__content`).addEventListener(`click`, function (e) {
    if (answers1Arr.some(checkArr) && answers2Arr.some(checkArr) === true) {
      makeGame2Template();
      showGame2Template();
    }
  });
  document.querySelector(`.game__content`).removeEventListener(`click`, function (e) {
    if (answers1Arr.some(checkArr) && answers2Arr.some(checkArr) === true) {
      makeGame2Template();
      showGame2Template();
    }
  });
  linkBack.addEventListener(`click`, function () {
    showIntroTemplate();
  });
  linkBack.removeEventListener(`click`, function () {
    showIntroTemplate();
  });
};
