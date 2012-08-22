var Background = new WObject(function(layer, background) {

	this.background = background;
	this.layer = layer || LayerManager.noLayerErr("Background");

	if(this.background == "transparent") {
		this.renderFn = function() {
			this.layer.empty();
		};
	} else {
		this.renderFn = this._drawBackground;
	}
});

Background.prototype.update = function() {};
Background.prototype.render = function() {
	this.renderFn.call(this);
};

Background.prototype._drawBackground = function() {
	this.layer.ctx.save();
	this.layer.ctx.fillStyle = this.background;
	this.layer.ctx.fillRect(0, 0, this.layer.canvas.width, this.layer.canvas.height);
	this.layer.ctx.restore();
};
