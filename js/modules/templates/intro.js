import {templateFooter} from './footer.js';
import {central} from '../module_constructor';
import {makeTemplate} from './../module_constructor.js';
import {makeGreetingTemplate} from './greeting.js';
const contentIntro = `<main id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
</main>    
`;
export const makeIntroTemplate = () => {
  makeTemplate(contentIntro, templateFooter);
  let next = (ev) => {
    if (ev.target === document.querySelector(`.intro__asterisk`)) {
      central.removeEventListener(`click`, next);
      makeGreetingTemplate();
    }
  };
  central.addEventListener(`click`, next);
};
