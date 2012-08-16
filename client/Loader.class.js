var Loader = {
	init: false,

	totalItems: 0,
	currentlyProcessed: 0,

	//Get the current progress of the loader
	getProgress: function() {
		return this.currentlyProcessed/this.totalItems;
	},

	items: {},

	load: {
		image: function(name, url) {
			var that = this,
				item = new Image();

			item.onload = function() {
				that.done(name, item);
			};

			item.src = V.assetsDir + url;
		},

		json: function(name, url) {
			var that = this,
				req = new XMLHttpRequest();

			req.responseType = "text";
			req.onload = function() {
				var data;

				try {
					data = JSON.parse(req.response);
				} catch(err) {
					throw new Error("JSON is invalid.");
					data = {};
				}

				that.done(name, data);
			};

			req.open("GET", V.assetsDir + url, true);
			req.send(null);
		},

		done: function(name, item) {
			Loader.items[name] = item;
			Loader.currentlyProcessed++;

			if(Loader.progress) Loader.progress(Loader.getProgress(), name, item);

			if(Loader.getProgress() == 1)
				if(Loader.loaded) Loader.loaded()
		}
	},

	loadAsset: function(type, name, url) {
		if(!this.init) {
			if(this.started) this.started();
			this.init = true;
		}

		this.totalItems++;
		this.load[type](name, url);
	}
};

/** Loader Events **/
Loader.loaded = function() {
	console.log("All items loaded!");
};

Loader.progress = function(progress, name, item) {
	console.log("Progress! Loaded " + name + ". " + (progress * 100) + "%");
};

Loader.started = function() {
	console.log("Starting to load assets.");
};

/** Load assets! **/
Loader.loadAsset("image", "Sonic", "img/sonicadvance.png");
Loader.loadAsset("json", "Button", "buttons/menuItem.json");