var Animation = function(update, render, count, repeat, dampen) {
	this.frame = 0;
	this.actualFrameCount = 0;
	this.dampen = dampen || 1;
	this.toUpdate = update;
	this.toRender = render;
	this.count = count - 1;

	this.repeat = repeat || false;
};

Animation.prototype.update = function() {
	if(this.actualFrameCount % this.dampen == 0) {
		this.toUpdate(this.frame);
		this.frame++;
	}

	this.actualFrameCount++;
};

Animation.prototype.render = function() {
	if(this.frame <= this.count) this.toRender();
	else if(this.repeat) {
		this.frame = 0;
		this.toRender();
	}
};