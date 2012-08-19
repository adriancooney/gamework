View.addState("Gameover", function() {
	return [
		new Background(new Layer, "#ff0"),

		new Text(new Layer, canvas.width/2, 40, "Dead Survival", "Arial", 10),

		new Button(new Layer, (canvas.width/2) - 60, 100, "Menu", "standard", function() {
			View.changeState("Gameover");
		}),

		new Button(new Layer, (canvas.width/2) + 60, 100, "Restart", "standard", function() {
			View.changeState("Gameover");
		})
	];
});