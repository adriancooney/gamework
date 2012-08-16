var DeadSurvival = {
	init: function() {
		/** Load Assets **/

		//Change screen state to loading
		View.changeState("Loading");

		Loader.loaded = function() {
			//Go to Menu when loading has finished
			View.changeState("Menu");
		}

		Loader.started = function() {
			console.log("Starting to load assets.");
		};

		//Actually load the assets
		Loader.loadAsset("image", "Sonic", "img/sonicadvance.png");
		Loader.loadAsset("json", "Button", "buttons/menuItem.json");

	}
};