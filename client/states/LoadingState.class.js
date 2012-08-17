View.addState("Loading", function() {
	return [
		new Background("#fff"),
		new ProgressBar(Loader.getProgress)
	]
});