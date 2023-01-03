/* mobile menu */
const bars = document.querySelector('.bars');
const xMark = document.querySelector('.x-mark');
const popUpNav = document.querySelector('.popUpNav');
const header = document.querySelector('header');
const main1 = document.querySelector('.main-1');


bars.addEventListener('click', () => {
  popUpNav.style.transform = 'translateX(0px)';
  header.style.filter = 'blur(5px)';
  main1.style.filter = 'blur(5px)';
});

xMark.addEventListener('click', () => {
  popUpNav.style.transform = 'translateX(-375px)';
  header.style.filter = 'blur(0px)';
  main1.style.filter = 'blur(0px)';
});