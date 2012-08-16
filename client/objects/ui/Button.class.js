var Button = function(x, y, text, type, callback) { 

	this.height = 40;
	this.width = 50;

	this.x = x - this.width;
	this.y = y - this.height;

	this.callback = callback;

	this.text = new Text(this.width/2, this.height/2, text);
}

Button.prototype.update = function() { };

Button.prototype.render = function() {
	ctx.save();
	ctx.fillStyle = "#000";
	ctx.fillRect(this.x, this.y, this.width, this.height);
	ctx.translate(this.x, this.y);
	this.text.render();
	ctx.restore();
};

Button.prototype.click = function() { 
	if(this.callback) this.callback.call(this);
};