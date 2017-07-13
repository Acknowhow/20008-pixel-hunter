
// export const paintingsPeople = window.onload = paintingsMapKey(`people`);
// export const paintingsAnimals = window.onload = paintingsMapKey(`animals`);
// export const paintingsItems = window.onload = paintingsMapKey(`items`);
// export const paintingsFruits = window.onload = paintingsMapKey(`fruits`);
// export const paintingsDishes = window.onload = paintingsMapKey(`dishes`);
// export const photosPeople = window.onload = photosMapKey(`people`);
// export const photosAnimals = window.onload = photosMapKey(`animals`);
// export const photosItems = window.onload = photosMapKey(`items`);
// export const photosFruits = window.onload = photosMapKey(`fruits`);
// export const photosDishes = window.onload = photosMapKey(`dishes`);

// Function for inserting screens directly into container

export const central = document.querySelector(`.central`);
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
