import {paintingsKeyMapped} from './../modules/templates/loader/imageLoader';
export const paintingsPeopleStored = paintingsKeyMapped(`people`);
export const paintingsAnimalsStored = paintingsKeyMapped(`animals`);
export const paintingsDishesStored = paintingsKeyMapped(`dishes`);
export const paintingsItemsStored = paintingsKeyMapped(`items`);
export const paintingsFruitsStored = paintingsKeyMapped(`fruits`);
export const central = document.querySelector(`.central`);
// Function for inserting screens directly into container
export const makeTemplate = (templateMain, templateFooter, templateHeader, questionObj) =>{
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
  if (!templateHeader) {
    return;
  }
  central.insertAdjacentHTML(`afterbegin`, templateHeader);
  if (!questionObj) {
    return;
  }
};
