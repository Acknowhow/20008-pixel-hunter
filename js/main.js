
(function () {
  let main = document.querySelector(`main`);
  let els = document.getElementsByTagName(`template`);
  let arr = [];
  main.style.display = `none`;
  Array.prototype.push.apply(arr, els);
  arr[0].classList.add(`greeting`);
  arr[0].style.display = `block`;
})();

