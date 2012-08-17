View.addState("Menu", function() {
	return [
		new Background("#f00"),

		new Button(canvas.width/2, canvas.height/2, "New Game", "standard", function() {
			console.log("Clicked!");
			DeadSurvival.newGame();
		})
	];
});