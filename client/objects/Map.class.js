/**
 * Always odd number of tiles
 * At least 30 tiles visiible
 */

var Map = function() {
	this.map = Loader.getAsset("Map");

	this.tileIndex = {
		1: "grass"
	};

	this.tiles = {
		grass: {
			img: Loader.getAsset("Tile-grass")
		}
	};

	//Current viewport
	this.vx = 0;
	this.vy = 0;
	this.vdx = 10;
	this.vdy = 20;
};

Map.prototype.setViewportFromCoord = function(x, y) {
	
};

Map.prototype.update = function() {

};

Map.prototype.render = function() {
	//Iterate over Y
	for(var y = 0, cache = this.vdy - this.vy; y < cache; y++) 
		for(var x = 0, cache = this.vdx - this.vx; x < cache; x++) {
			this.renderTile(x * V.tileSize, y * V.tileSize, this.map.tiles[this.vy + y][this.vx + x]);
		}
};

Map.prototype.renderTile = function(x, y, tile) {
	(new Sprite(this.tiles[this.tileIndex[tile]].img, x, y, V.tileSize, V.tileSize, 1)).render();
};