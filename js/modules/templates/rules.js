import {showIntroTemplate} from './intro';
import {makeTemplate} from './../module_constructor.js';
import {show} from './../module_constructor.js';
import {makeGame1Template} from './game-1.js';
import {showGame1Template} from './game-1.js';
export const moduleRules = `
<header class="header">
  <div class="header__back">
    <span class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.png" width="101" height="44">
    </span>
  </div>
</header>
<div class="rules">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото 
  <img src="img/photo_icon.png" width="16" height="16"> или рисунок <img src="img/paint_icon.png" width="16" height="16" alt="">.<br>
  Фотографиями или рисунками могут быть оба изображения.<br>На каждую попытку отводится 30 секунд.<br>
  Ошибиться можно не более 3 раз.<br><br>
  Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</div>`;
export const makeRulesTemplate = () => {
  makeTemplate(moduleRules, `rules`, document.querySelector(`#greeting`));
};
export const showRulesTemplate = () => {
  show(document.querySelector(`#rules`));
  const rulesInput = document.querySelector(`.rules__input`);
  const rulesButton = document.querySelector(`.rules__button`);
  const linkBack = document.querySelector(`.header__back`);
  let empty = (ev) => {
    if (ev.target === rulesInput) {
      rulesInput.addEventListener(`input`, function () {
        if (rulesButton.hasAttribute(`disabled`)) {
          rulesButton.removeAttribute(`disabled`);
        }
      });
      rulesInput.removeEventListener(`input`, function () {
        if (rulesButton.hasAttribute(`disabled`)) {
          rulesButton.removeAttribute(`disabled`);
        }
      });
    }
  };
  let next = (ev) => {
    if (ev.target === rulesButton) {
      makeGame1Template();
      showGame1Template();
    }
  };
  rulesInput.addEventListener(`keydown`, function (e) {
    empty(e);
  });
  rulesInput.removeEventListener(`keydown`, function (e) {
    empty(e);
  });
  rulesButton.addEventListener(`click`, function (e) {
    next(e);
  });
  rulesButton.removeEventListener(`click`, function (e) {
    next(e);
  });
  linkBack.addEventListener(`click`, function () {
    showIntroTemplate();
  });
  linkBack.removeEventListener(`click`, function () {
    showIntroTemplate();
  });
};

