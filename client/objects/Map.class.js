var Map = {
	data: [],
	counts: {},

	generate: function(dim) {
		this.side = Math.sqrt(dim);

		//Push arrays for 2D ness
		for(var i = 0; i < this.side; i++) this.data.push([]);

		for(var tile in this.terrain) {
			this.bulkAddTile(tile, this.terrain[tile]);
		}	
	},

	addTile: function(tile, x, y) {
		this.data[y][x] = tile;
	},

	terrain: {
		bush: {
			ratio: 0.2,
			solid: true,
			fill: "blue"
		},

		grass: {
			ratio: 0.8,
			solid: false,
			fill: "green"
		}
	}
};