console.log("Hello from Diana's JavaScript!");

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function(){
	
	document.body.classList.toggle("dark-mode");
	
	if (document.body.classList.contains("dark-mode")) {
		themeButton.textContent = "Switch to Light Mode";
	} else {
		themeButton.textContent = "Switch to Dark Mode";
	}
	
});

const facts = [
	"I have exhibited my art at 3 artshows so far and have 3 more lined up.",
	"I would love to work at Fortiche someday.",
	"I would love to be a published childrens book illustrator.",
	"Im currently working on a zine about toronto cafes and restauants with my artwork and copy.",
	"I have worked as a lighting and comp artist for 3D kid shows.",
	"I can bake a sweet as brownie et earl grey chocolate chips cookies U-U",
	"Im multi-lingual, know a bit of hiragana and am currently learing french.",
];

const factButton = document.getElementById("fact-button");
const factDisplay = document.getElementById("fact-display");

factButton.addEventListener("click", function() {
	
	const randomIndex = Math.floor(Math.random() * facts.length);
	
	factDisplay.textContent = facts[randomIndex];
});

const nameInput = document.getElementById("visitor-name");
const greetingButton = document.getElementById("greeting-button");
const greetingDisplay = document.getElementById("greeting-display");

greetingButton.addEventListener("click", function() {
	
	const visitorName = nameInput.value.trim();
	
	if (visitorName === "") {
		greetingDisplay.textContent = "Heya! dont forget to enter your name first!";
	} else {
		greetingDisplay.textContent = "Hey " + visitorName + "! Welcome to The6ix Townsville. Ready to make new friends?!";
	}
	
});