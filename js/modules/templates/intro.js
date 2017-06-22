import show from './../module_slideshow.js';
import i from './../module_slideshow.js';
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
export const templateIntro = (template) =>{
  const container = document.createElement(`template`);
  container.id = `introduction`;
  container.innerHTML = moduleIntro;
  document.querySelector(`.central`).after(container);
  let clone = document.importNode(container.content, true);
  document.querySelector(`.central`).appendChild(clone);
};

document.querySelector(`.central`).addEventListener(`click`, function (e) {
  if (e.target === document.querySelector(`.intro__asterisk`)) {
    document.body.style.background = `red`;
  }
});
