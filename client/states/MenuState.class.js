View.addState("Menu", [
	new Background("#f00"),

	new Button(canvas.width/2, canvas.height/2, "New Game", "standard", function() {
		View.changeState("Gameplay");
	})
]);