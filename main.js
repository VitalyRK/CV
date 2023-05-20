const navList = document.querySelector('.nav__list');
const navBtn = document.querySelector('.nav__icon');

const body = document.body;

navBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
  navBtn.classList.toggle('active');
  body.classList.toggle('lock');
})

navList.querySelectorAll('.nav__item').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
    navBtn.classList.remove('active');
    body.classList.remove('lock');
  })
})
