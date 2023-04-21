const navbar = document.querySelector(".navbar");
const toggleButton = navbar.querySelector(".navbar-toggle");
const menu = navbar.querySelector(".navbar-menu");

// Toggle the menu on button click
toggleButton.addEventListener("click", () => {
	menu.classList.toggle("show");
});

// // Make the navbar sticky when scrolling
// window.addEventListener('scroll', () => {
//   navbar.classList.toggle('sticky', window.scrollY > 0);
// });
// previous scroll position
let prevScrollpos = window.pageYOffset;
// Hide the navbar when scrolling down using hide class and show it when scrolling up using sticky class
window.addEventListener("scroll", () => {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		navbar.classList.add("sticky");
		navbar.classList.remove("hide");
	} else {
		navbar.classList.remove("sticky");
		navbar.classList.add("hide");
	}
	prevScrollpos = currentScrollPos;
});
// Close the menu when clicking outside
window.addEventListener("click", (e) => {
	if (
		e.target.closest(".navbar-toggle") === null &&
		e.target.closest(".navbar-menu") === null
	) {
		menu.classList.remove("show");
	}
});

filledStar = "★";
emptyStar = "☆";

// Function to calculate the average rating
function calculateAverageRating() {
	let total = 0;
	let count = 0;
	for (let i = 0; i < reviewData.length; i++) {
		total += reviewData[i].rating;
		count++;
	}
	return total / count;
}

const averageRatingContainer = document.getElementById("average-rating");
// Function to display the average rating
function displayAverageRating() {
	const averageRating = calculateAverageRating();
    console.log(averageRating)
    console.log(averageRatingContainer)
	averageRatingContainer.innerHTML =
		averageRating.toFixed(2) +
		" " +
		filledStar.repeat(Math.floor(averageRating)) +
		emptyStar.repeat(5 - Math.floor(averageRating));
}

// displayAverageRating();
// element to show the ratings
const ratingsContainer = document.getElementById("app");

// Function to display the ratings
function displayRatings() {
	let ratingsHTML = "";
	for (let i = 0; i < reviewData.length; i++) {
		ratingsHTML += `
      <div class="rating">
        <div class="rating-header">
          <div class="rating-name">${reviewData[i].name}</div>
          <div class="rating-date">${reviewData[i].date}</div>
        </div>
        <div class="rating-stars">
          ${filledStar.repeat(reviewData[i].rating)}
          ${emptyStar.repeat(5 - reviewData[i].rating)}
        </div>
        <div class="rating-review">${reviewData[i].review}</div>
      </div>
    `;
	}
    console.log(ratingsHTML);
	ratingsContainer.innerHTML = ratingsHTML;
}

displayRatings();

// Input fields
const form = document.getElementById("review-form");
const nameInput = document.getElementById("name");
const reviewInput = document.getElementById("review");
const ratingInput = document.getElementById("rating");
const submitButton = document.getElementById("submit");

// Function to add a new rating
function addRating() {
	const newRating = {
		name: nameInput.value,
		review: reviewInput.value,
		rating: parseInt(ratingInput.value),
		date: new Date().toLocaleDateString(),
	};
	reviewData.push(newRating);
	displayRatings();
	displayAverageRating();
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	addRating();
	form.reset();
});
