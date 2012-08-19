var LayerManager = {
	layers: [],

	add: function(lay) {
		if(!lay) {
			lay = new Layer(this.layers.length);
		}

		this.layers.push(lay);

		V.layerContainer.appendChild(lay.canvas);

		return lay;
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
		var one = this.layers.slice(0, pos),
			two = this.layers.slice(pos, this.layers.length-1);

		one.push(new Layer(pos));

		this.layers = one.concat(two);
	},

	remove: function(layer) {
		delete this.layers[this.layers.indexOf(layer)];
		this.layers = this.layers.refresh();
	},

	palette: function(count) {
		for(var i = 0; i < count; i++) this.add();
	},

	noLayerErr: function(cl) {
		throw new Error("No layer supplied for drawing with " + cl);
	},

	empty: function() {
		V.layerContainer.innerHTML = "";
	}
};