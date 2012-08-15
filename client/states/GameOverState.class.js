View.states["GameOver"] = new State();

View.states["GameOver"].objects.push(new Background("#ff0"))
View.states["GameOver"].objects.push(new Text(canvas.width/2, 40, "Dead Survival", "Arial", 10));

View.states["GameOver"].objects.push(new Button((canvas.width/2) - 60, 100, "Menu", "standard", function() {
	View.changeState("GameOver");
}));

View.states["GameOver"].objects.push(new Button((canvas.width/2) + 60, 100, "Restart", "standard", function() {
	View.changeState("GameOver");
}));