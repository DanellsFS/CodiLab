const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.nav-hamburger');
const closeMenu = document.querySelector('.nav-close');

hamburger.addEventListener('click', () => {
  document.body.classList.add('no-scroll');
});

closeMenu.addEventListener('click', () => {
  document.body.classList.remove('no-scroll');
});