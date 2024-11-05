// This is a simple JavaScript file for demonstration purposes
console.log("Welcome to my personal website!");

// Get the button and body elements
const button = document.getElementById("toggle-button");
const body = document.body;

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Toggle the dark mode class on the body
  body.classList.toggle("dark-mode");

  // Optionally change the button text
  if (body.classList.contains("dark-mode")) {
    button.textContent = "Switch to Light Mode";
  } else {
    button.textContent = "Switch to Dark Mode";
  }
});
