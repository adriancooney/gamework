View.addState("Gameover", [
	new Background("#ff0"),

	new Text(canvas.width/2, 40, "Dead Survival", "Arial", 10),

	new Button((canvas.width/2) - 60, 100, "Menu", "standard", function() {
		View.changeState("Gameover");
	}),

	new Button((canvas.width/2) + 60, 100, "Restart", "standard", function() {
		View.changeState("Gameover");
	})
]);