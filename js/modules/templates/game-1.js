import {templateHeader} from './header';
import {initialState} from './data/gameData';
import {templateFooter} from './footer';
import {makeTemplate} from './../module_constructor';
import {makeIntroTemplate} from './intro';
import {makeGame2Template} from './game-2.js';
import {content} from './data/gameData';
// import {makeQuestion} from './../question-constructor';
// let peoplePaintingsImgs = mapKey(`peoplePaintings`);
// imgsObj[`peoplePaintings`] = peoplePaintingsImgs;


// import {paintingsAnimals} from './../module_constructor';
const templateGame1 = `
  <div class="game">
    <p class="game__task">${content.greeting}</p> 
    <form class="game__content">
      <div class="game__option">
        <label class="game__answer game__answer--photo">
          <input name=question1 type="radio" value="photo">
          <span>${content.text[0]}</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>${content.text[1]}</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>${content.text[0]}</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>${content.text[1]}</span>
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
  makeTemplate(templateGame1, templateFooter, templateHeader(initialState));
  // document.querySelector(`form > div:nth-child(1)`).insertAdjacentElement(`afterbegin`, imgsObj[`peoplePaintings`][`Man bearded`]);
  // document.querySelector(`form > div:nth-child(1)`).replaceChild(makeQuestion(document.querySelector(`form > div:nth-child(1) > img`), questions, `question1`), document.querySelector(`form > div:nth-child(1) > img`));
  // const imageStorage = document.querySelector(`form > div:nth-child(1)`).appendChild(createImgTemplate(imagesData, imagesData.paintings[0]));
 //  imageStorage.onload = () => {
  //   document.querySelector(`form > div:nth-child(1)`).appendChild(makeQuestion(questions, `question1`, imageStorage));
 //  };
  // First options screen
  const opts1 = document.querySelector(`form > div:nth-child(1)`);
  // Second options screen
  const opts2 = document.querySelector(`form > div:nth-child(2)`);
  // Select all inputs in option1
  const answers1 = document.querySelector(`.game__content`).children[0].querySelectorAll(`input`);
  // Select all inputs in option2
  const answers2 = document.querySelector(`.game__content`).children[1].querySelectorAll(`input`);
  const answers1Arr = [];
  const answers2Arr = [];
  const linkBack = document.querySelector(`.header__back`);
  Array.prototype.push.apply(answers1Arr, answers1);
  Array.prototype.push.apply(answers2Arr, answers2);
  const switchBack = (ev) => {
    if (ev.currentTarget === linkBack) {
      linkBack.removeEventListener(`click`, switchBack);
      makeIntroTemplate();
    }
  };
  const checkArr = (a) => {
    return a.checked === true;
  };
  const checkOpt1 = () => {
    if (answers2Arr.some(checkArr) === true) {
      opts1.removeEventListener(`click`, checkOpt1);
      opts2.removeEventListener(`click`, checkOpt2);
      makeGame2Template();
    }
  };
  const checkOpt2 = () => {
    if (answers1Arr.some(checkArr) === true) {
      opts1.removeEventListener(`click`, checkOpt1);
      opts2.removeEventListener(`click`, checkOpt2);
      makeGame2Template();
    }
  };
  opts1.addEventListener(`click`, checkOpt1);
  opts2.addEventListener(`click`, checkOpt2);
  linkBack.addEventListener(`click`, switchBack);
};

