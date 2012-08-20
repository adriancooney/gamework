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
		return [
			new Background(new Layer, "#f00")
		];
	});

	View.setState("Sample");

	Loop.init(function() {
		View.renderState();
	});
 });