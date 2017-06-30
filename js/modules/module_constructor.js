import {footerContent} from './../footer.js';
export const central = document.querySelector(`.central`);
// Function for inserting screens directly into container
export const makeTemplate = (module) =>{
  const container = document.createElement(`template`);
  const footer = document.createElement(`footer`);
  container.innerHTML = module;
  while (central.firstChild) {
    central.removeChild(central.firstChild);
  }
  central.appendChild(container.content);
};
