var Config = {
	_hooks: {},
	init: function(config) {

		this._addHook("layerContainer", function(val) {
			return document.querySelectorAll(val)[0];
		});

		this._parseConfig(config);
	},

	_parseConfig: function(conf) {
		for(prop in conf) this._parseItem(prop, conf[prop]);
	},

	_parseItem: function(item, value) {
		if(this._hooks[item]) {
			this.store[item] = this._hooks[item].fn.call(this, value);
		} else {
			this.store[item] == (this.store[item]) ? this._error("Item already exists") : value;
		}
	},

	_addHook: function(item, fn) {
		this._hooks["item"] = fn;
	},

	get: function(item) {
		return this.store[item];
	},

	set: function(prop, val) {
		this.store[prop] = val;
	}
};

