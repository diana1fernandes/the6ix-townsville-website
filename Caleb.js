const catButton = document.getElementById("cat-fact-button");

catButton.addEventListener("click", async function() {
	try {
		const response = await fetch("https://catfact.ninja/fact");
	
	if (!response.ok) {
		throw new Error("Something went wrong!");
	}
	
	const data = await response.json()
	
	document.getElementById("cat-fact-button").textContent = data.fact;
	
	} catch (error) {
		document.getElementById("cat-fact-display").textContent =
			"Oops Caleb is buffering. Try again?!";
	}
});