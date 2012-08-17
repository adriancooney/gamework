var LayerManager = {
	active: (function() {
		return new Layer
	})(),

	layers: [],

	add: function(pos) {
		if(pos) {
			var one = this.layers.slice(0, pos),
				two = this.layers.slice(pos, this.layers.length-1);

			one.push(new Layer(pos));

			this.layers = one.concat(two);
		} else this.layers.push(new Layer(this.layers.length))
	},

	bringToFront: function(layer) {
		this.remove(layer);
		this.layers.push(layer);
	},

	sendToBack: function(layer) {
		this.remove(layer);
		this.layers = [layer].concat(this.layers);
	},

	move: function(layer, pos) {
		
	}

	remove: function(layer) {
		delete this.layers[this.layers.indexOf(layer)];
		this.layers = this.layers.refresh();
	},

	palette: function(count) {
		for(var i = 0; i < count; i++) this.add();
	},
};