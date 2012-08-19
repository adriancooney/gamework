var Button = function(layer, x, y, text, type, callback) { 
	this.layer = layer;
	this.height = 40;
	this.width = 50;

	this.x = x - this.width;
	this.y = y - this.height;

	this.callback = callback;

	this.text = new Text(this.layer, this.width/2, this.height/2, text);
}

Button.prototype.update = function() { };

Button.prototype.render = function() {
	this.layer.ctx.save();
	this.layer.ctx.fillStyle = "#000";
	this.layer.ctx.fillRect(this.x, this.y, this.width, this.height);
	this.layer.ctx.translate(this.x, this.y);
	this.text.render();
	this.layer.ctx.restore();
};

Button.prototype.click = function() { 
	if(this.callback) this.callback.call(this);
};