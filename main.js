// main.js

// Select the hamburger and close button
const hamburger = document.getElementById("hamburger");

const navLinks = document.querySelector(".part2"); // Select the part2 class which contains the links

// Toggle the 'active' class when hamburger is clicked (open menu)
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Open the menu by adding the 'active' class
});
