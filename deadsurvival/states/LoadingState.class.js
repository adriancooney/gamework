View.addState("Loading", function() {
	return [
		new Background(new Layer, "#fff"),
		new ProgressBar(new Layer, Loader.getProgress)
	]
});