/*
 * Framework initilization (which is basically just config)
 */

 Loader.loadAssetOnce("json", "../config.json", function(conf) {
 	Config.init(conf);

	 /*
	  * For demonstration purposes! This should go in your main game initilization file.
	  */

	//Set the default state
	View.addState("Sample", function() {
		var layer = new Layer;

		return [
			new Background(layer, "#f00"),
			new Body(new Shape(layer, "rect", { x: 50, y: 50, height: 40, width: 40 }))
		];
	});

	View.setState("Sample");

	Loop.init(function() {
		View.renderState();
	});
 });