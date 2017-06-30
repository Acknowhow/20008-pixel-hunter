export const central = document.querySelector(`.central`);
// Function for inserting screens directly into container
export const makeTemplate = (module) =>{
  const container = document.createElement(`template`);
  container.innerHTML = module;
  while (central.firstChild) {
    central.removeChild(central.firstChild);
  }
  central.appendChild(container.content);
};
