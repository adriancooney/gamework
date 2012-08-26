var DeadSurvival = {
	init: function() {
		/** Load Assets **/

		//Change screen state to loading
		View.changeState("Loading");

		var that = this;

		Loader.loaded = function() {
			console.log("Assets Loaded.")
			//Go to Menu when loading has finished
			that.newGame()
		};

		Loader.progress = function(progress, name, item) {
			console.log("Loaded asset \"" + name + "\"");
		};

		Loader.started = function() {
			console.log("Starting to load assets.");
		};

		//Actually load the assets
		Loader.loadAsset("image", "Sonic", "img/sonicadvance.png");
		Loader.loadAsset("image", "Ball", "img/test-sprite.png");
		Loader.loadAsset("json", "Button", "buttons/menuItem.json");

		//Load the map
		Loader.loadAsset("json", "Map", "map.json");

		//Tiles
		Loader.loadAsset("image", "Tile-grass", "img/tiles/grass.png");
	},

	newGame: function() {
		console.log("Initiating new game.");
		this.player = new Player(new Layer);

		View.changeState("Gameplay");

		View.addObject(this.player);
	}
};