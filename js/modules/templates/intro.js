import {central} from './../module_constructor';
import {makeTemplate} from './../module_constructor.js';
// import {show} from './../module_constructor.js';
// import {makeGreetingTemplate} from './greeting.js';
// import {showGreetingTemplate} from './greeting.js';
const moduleIntro = `<main id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
</main>    
<footer class="footer">
    <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
    <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
    <div class="footer__social-links">
      <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
      <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
      <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
      <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
    </div>
 </footer>
`;
export const makeIntroTemplate = () => {
  makeTemplate(moduleIntro, `introduction`);
};
// makeIntroTemplate();
// export const showIntroTemplate = () => {
 //  show(document.querySelector(`#introduction`));
  // let next = (ev) => {
  //   if (ev.target === document.querySelector(`.intro__asterisk`)) {
  //     makeGreetingTemplate();
  //     showGreetingTemplate();
  //   }
  // };
  // central.addEventListener(`click`, function (e) {
  //   next(e);
  // });
  // central.removeEventListener(`click`, function (e) {
  //   next(e);
  // });
// };
