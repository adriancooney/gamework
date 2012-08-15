var Background = function(background) {
	this.background = background;
};

Background.prototype.update = function() {};
Background.prototype.render = function() {
	ctx.save();
	ctx.fillStyle = this.background;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.restore();
};

