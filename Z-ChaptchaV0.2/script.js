// Define an array of website URLs
var websites = [
	"https://www.google.com",
	"https://www.yahoo.com",
	"https://www.bing.com",
	"https://www.wikipedia.org",
	"https://www.youtube.com"
];

// Get a reference to the image element
var image = document.getElementById("image");

// Add a click event listener to the image
image.addEventListener("click", function() {
	// Generate a random index between 0 and the length of the array
	var randomIndex = Math.floor(Math.random() * websites.length);

	// Navigate to a random website from the array
	window.location.href = websites[randomIndex];
});
