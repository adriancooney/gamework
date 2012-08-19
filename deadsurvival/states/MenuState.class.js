View.addState("Menu", function() {
	return [
		new Background(new Layer, "#f00"),

		new Button(new Layer, canvas.width/2, canvas.height/2, "New Game", "standard", function() {
			console.log("Clicked!");
			DeadSurvival.newGame();
		})
	];
});