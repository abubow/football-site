const navbar = document.querySelector('.navbar');
const toggleButton = navbar.querySelector('.navbar-toggle');
const menu = navbar.querySelector('.navbar-menu');

// Toggle the menu on button click
toggleButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Make the navbar sticky when scrolling
window.addEventListener('scroll', () => {
  navbar.classList.toggle('sticky', window.scrollY > 0);
});
