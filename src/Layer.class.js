var Layer = function(index) {
	this.container = Config.get("layerContainer");

	this.canvas = document.createElement("canvas");
	this.canvas.width = Config.get("viewportWidth")
	this.canvas.height = Config.get("viewportHeight");

	this.ctx = this.canvas.getContext("2d");
	this.id = this._count();

	this.push(index);
};

Layer.prototype.push = function(index) {
	var count = this._count();
	
	this._index = index || count;
	this.canvas.id = "layer-" + this.id;
	this.canvas.style.zIndex = this._index;

	if(index) {
		document.getElementById("layer-" + index).insertBefore(this.canvas)
	} else {
		this.container.appendChild(this.canvas);
	}
};

Layer.prototype._count = function() {
	return document.querySelectorAll(Config.raw("layerContainer") + " canvas").length;
};

Layer.prototype.destroy = function() {
	this.canvas.parentNode.removeChild(this.canvas);
};

Layer.prototype.index = function(index) {
	if(index == this._index) return;

	var layers = document.querySelectorAll(Config.raw("layerContainer") + " canvas");

	Array.prototype.forEach.call(layers, function(l) {
		var ind = parseInt(l.style.zIndex);
		if(ind >= index) l.style.zIndex = ind + 1;
	});

	this._index = index;
	this.canvas.style.zIndex = index;
};

Layer.prototype.bringToFront = function() {
	this.index(this._count());
};

Layer.prototype.sendToBack = function() {
	this.index(0);
};