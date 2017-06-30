export const central = document.querySelector(`.central`);
// Function for inserting screens directly into container
export const makeTemplate = (templateMain, templateFooter) =>{
  const container = document.createElement(`template`);
  const footer = document.createElement(`footer`);
  footer.classList.add(`footer`);
  footer.innerHTML = templateFooter;
  container.innerHTML = templateMain;
  while (central.firstChild) {
    central.removeChild(central.firstChild);
  }
  central.appendChild(container.content);
  central.appendChild(footer);
};
