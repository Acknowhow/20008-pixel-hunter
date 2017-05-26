
(function () {
  let central = document.querySelector(`.central`);
  let main = document.querySelector(`#main`);
  let footer = document.querySelector(`.central .footer`);
  let greeting = document.querySelector(`#greeting`);
  let temps = document.querySelectorAll(`template`);
  const tempsArr = [];
  Array.prototype.push.apply(tempsArr, temps);
  const linksArr = tempsArr.map(function (temp) {
    // Pushing all links Next and Back to temps array
    return temp.content.querySelectorAll(`img[alt='Next'], img[alt='Back']`);
  });
  function show(slide) {
    let mainArr = [main, footer];
    let content = slide.content;
    // Clone template content
    let clone = document.importNode(content, true);
    mainArr.forEach(function (selector) {
      selector.style.display = `none`;
    });
    central.appendChild(clone);
  }
  // Greeting
  show(greeting);
})();

