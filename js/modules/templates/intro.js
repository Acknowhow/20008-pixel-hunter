const getElementFromTemplate = (template) =>{
  const container = document.createElement(`template`);
  container.id = `introduction`;
  container.innerHTML = moduleIntro;
  document.querySelector(`.central`).after(container);
  let clone = document.importNode(container.content, true);
  let firstChild = document.querySelector(`.central`).firstChild;
  document.querySelector(`.central`).insertBefore(clone, firstChild);
};
const moduleIntro = `<main id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
</main>`;
const introTemplate = getElementFromTemplate(moduleIntro);
export default introTemplate;

