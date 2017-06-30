export const central = document.querySelector(`.central`);
// Function for inserting screens directly into container
export const makeTemplate = (contentModule, contentFooter) =>{
  const container = document.createElement(`template`);
  container.innerHTML = contentModule;
  while (central.firstChild) {
    central.removeChild(central.firstChild);
  }
  central.appendChild(container.content);
  if (!contentFooter) {
    return;
  }
  const footer = document.createElement(`footer`);
  footer.classList.add(`footer`);
  footer.innerHTML = contentFooter;
  central.insertAdjacentHTML(`afterEnd`, contentFooter);
};
