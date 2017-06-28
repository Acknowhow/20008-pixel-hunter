export const central = document.querySelector(`.central`);
// Function for making templates
export const makeTemplate = (module, id, prevEl) =>{
  const container = document.createElement(`template`);
  container.id = id;
  container.innerHTML = module;
  prevEl.after(container);
};
// Function for displaying templates
export const show = (slide) => {
  const clone = document.importNode(slide.content, true);
  while (central.firstChild) {
    central.removeChild(central.firstChild);
  }
  central.appendChild(clone);
};

