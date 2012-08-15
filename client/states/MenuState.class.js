View.states["Menu"] = new State();

//Objec render in order!
View.states["Menu"].objects.push(new Background("#f00"));

View.states["Menu"].objects.push(new Button(canvas.width/2, canvas.height/2, "New Game", "standard", function() {
	View.changeState("GamePlay");
}));