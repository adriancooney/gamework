var Text = function(layer, x, y, text, font, size, color) {
	this.x = x;
	this.y = y;

	this.text = text;
	this.font = font || "Arial";
	this.size = size || 16;
	this.color = color || "#fff";
	this.layer = layer || LayerManager.noLayerErr("Text");
};

Text.prototype.update = function() {};
Text.prototype.render = function() {
	this.layer.ctx.fillStyle = this.color;
	this.layer.ctx.textAlign = "center";
	this.layer.ctx.font = this.font + " " + this.size + "px";
	this.layer.ctx.fillText(this.text, this.x, this.y)
};