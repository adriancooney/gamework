var Layer = function(pos) {
	this.canvas = document.createElement("canvas");
	this.canvas.width = V.viewportWidth;
	this.canvas.width = V.viewportHeight;

	this.ctx = this.canvas.getContext("2d");

	this.position = pos;

	this.canvas.id = "layer-" + pos;

	//LayerManager.add(this);
};