const navbar = document.querySelector('.navbar');
const toggleButton = navbar.querySelector('.navbar-toggle');
const menu = navbar.querySelector('.navbar-menu');

// Toggle the menu on button click
toggleButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// // Make the navbar sticky when scrolling
// window.addEventListener('scroll', () => {
//   navbar.classList.toggle('sticky', window.scrollY > 0);
// });
// previous scroll position
let prevScrollpos = window.pageYOffset;
// Hide the navbar when scrolling down using hide class and show it when scrolling up using sticky class
window.addEventListener('scroll', () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.classList.add('sticky');
        navbar.classList.remove('hide');
    } else {
        navbar.classList.remove('sticky');
        navbar.classList.add('hide');
    }
    prevScrollpos = currentScrollPos;
});
// Close the menu when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.closest('.navbar-toggle') === null && e.target.closest('.navbar-menu') === null) {
        menu.classList.remove('show');
    }
});
