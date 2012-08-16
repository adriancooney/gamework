var ProgressBar = function(feed) {
	this.progress = 0;

	/* The feed is the function to refresh to get progress */
	this.feed = feed;
};

ProgressBar.prototype.update = function() {
	this.progress = this.feed() * 100;
};

ProgressBar.prototype.render = function() {
	ctx.save();
	ctx.fillRect(40, 40, this.progress * 5, 40);
	ctx.restore();
};