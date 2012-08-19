var ProgressBar = function(layer, feed) {
	this.progress = 0;
	this.layer = layer || LayerManager.noLayerErr("ProgressBar");

	/* The feed is the function to refresh to get progress */
	this.feed = feed;
};

ProgressBar.prototype.update = function() {
	this.progress = this.feed() * 100;
};

ProgressBar.prototype.render = function() {
	this.layer.ctx.save();
	this.layer.ctx.fillRect(40, 40, this.progress * 5, 40);
	this.layer.ctx.restore();
};