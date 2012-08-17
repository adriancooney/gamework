var Text = function(x, y, text, font, size, color) {
	this.x = x;
	this.y = y;

	this.text = text;
	this.font = font || "Arial";
	this.size = size || 16;
	this.color = color || "#fff";
};

Text.prototype.update = function() {};
Text.prototype.render = function() {
	ctx.fillStyle = this.color;
	ctx.textAlign = "center";
	ctx.font = this.font + " " + this.size + "px";
	ctx.fillText(this.text, this.x, this.y)
};