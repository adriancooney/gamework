var LayerManager = {
	layers: [],

	add: function(ind) {
		this.layers.push(new Layer(ind));
	},

	remove: function(layer) {
		var index = this.layers.indexOf(layer);
		this.layers[index].destroy();
		delete this.layers[index];
	},

	empty: function() {
		this.layers.forEach(function(layer) {
			layer.destroy();
		});

		this.layer = [];
	}
};