/* mobile menu */
const bars = document.querySelector('.bars');
const xMark = document.querySelector('.x-mark');
const popUpNav = document.querySelector('.popUpNav');
const header = document.querySelector('header');
const main1 = document.querySelector('.main-1');
const items = document.querySelector('.nav-items-2 .items');

bars.addEventListener('click', () => {
  popUpNav.style.visibility = 'visible';
  popUpNav.style.opacity = '1';
  header.style.filter = 'blur(5px)';
  main1.style.filter = 'blur(5px)';
});

xMark.addEventListener('click', () => {
  popUpNav.style.visibility = 'hidden';
  popUpNav.style.opacity = '0';
  header.style.filter = 'blur(0px)';
  main1.style.filter = 'blur(0px)';
});

items.addEventListener('click', () => {
  popUpNav.style.visibility = 'hidden';
  popUpNav.style.opacity = '0';
  header.style.filter = 'blur(0px)';
  main1.style.filter = 'blur(0px)';
});