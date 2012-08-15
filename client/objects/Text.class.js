var Text = function(x, y, text, font, size, color) {
	this.x = x;
	this.y = y;

	this.string = text;
	this.font = font || "Arial";
	this.size = size || 16;
	this.color = color || "#000";
};

Text.prototype.update = function() {};
Text.prototype.render = function() {
	ctx.fillStyle = this.color;
	ctx.textAlign = "center";
	ctx.font = this._genFontStr();
	ctx.fillText(this.text, this.x, this.y)
};

Text.prototype._genFontStr = function() {
	return this.font + " " + this.size + "px";
};