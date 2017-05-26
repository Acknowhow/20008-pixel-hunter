
(function () {
  let central = document.querySelector(`.central`);
  let main = document.querySelector(`#main`);
  let footer = document.querySelector(`.central .footer`);
  let greeting = document.querySelector(`#greeting`);
  let temps = document.querySelectorAll(`template`);
  const tempsArr = [];
  Array.prototype.push.apply(tempsArr, temps);
  const linksArr = tempsArr.map(function (temp) {
    return temp.content.querySelectorAll(`img[alt='Next'], img[alt='Back']`); // Pushing all links Next and Back to temps array
  });
  function show(slide) {
    let mainArr = [main, footer];
    let content = slide.content;
    let clone = document.importNode(content, true); // Clone template content
    mainArr.forEach(function (selector) {
      selector.style.display = `none`;
    });
    central.appendChild(clone);
  }
  show(greeting); // Greeting
})();

