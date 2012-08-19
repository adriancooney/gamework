var Config = {
	_hooks: {},
	store: {},
	rawStore: {},

	init: function(config) {

		this._addHook("layerContainer", function(val) {
			return document.querySelectorAll(val)[0];
		});

		this._addHook("assets", function(obj) {
			for(var type in obj) {
				//But what about class independance..? Shutup.
				for(var asset in obj[type]) Loader.loadAsset(type, asset, obj[type][asset]);
			}
		});

		this._parseConfig(config);
	},

	_parseConfig: function(conf) {
		for(prop in conf) this._parseItem(prop, conf[prop]);
	},

	_parseItem: function(item, value) {
		console.log(item, this._hooks[item]);
		if(this._hooks[item]) {
			this.store[item] = this._hooks[item].call(this, value);
		} else {
			this.store[item] = (this.store[item]) ? this._error("Item already exists") : value;
		}

		this.rawStore[item] = value;
	},

	_addHook: function(item, fn) {
		this._hooks[item] = fn;
	},

	_error: function(msg) {
		throw new Error("Configuration Error: " + msg);
	},

	get: function(item) {
		return this.store[item];
	},

	set: function(prop, val) {
		this.store[prop] = val;
	},

	raw: function(item) {
		return this.rawStore[item];
	}
};

