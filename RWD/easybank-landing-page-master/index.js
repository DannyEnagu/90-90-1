const navToggle = document.querySelector('#navToggle');

const closeMenu = document.querySelector('#toggleClose');

const openMenu = document.querySelector('#toggleOpen');

const menu = document.querySelector('#menu');

navToggle.addEventListener('click', () => {
  menu.classList.toggle('nav--isOpen');
  closeMenu.classList.toggle('hidden');
  openMenu.classList.toggle('hidden');
});

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () {
  scrollFunction();
};

const scrollTop = 47;

function scrollFunction () {
  if (document.body.scrollTop > scrollTop || document.documentElement.scrollTop > scrollTop) {
    document
      .getElementById('header')
      .classList.add('sticky__header');
  } else {
    document
      .getElementById('header')
      .classList.remove('sticky__header');
  }
}
