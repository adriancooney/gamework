var Vec2 = function(x, y) {
	this.x = x;
	this.y = y;
	this.limit = null;
};

Vec2.prototype.mag = function() {
	return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};

Vec2.prototype.add = function(vec) {

	this.x = this.x + vec.x;
	this.y = this.y + vec.y;

	return this;
};

Vec2.prototype.sub = function(vec) {
	this.x = this.x - vec.x;
	this.y = this.y - vec.y;

	return this;
};

Vec2.prototype.direction = function() {
	return Math.asin(this.y/this.mag());
};

Vec2.prototype.normalize = function() {
	var mag = Math.floor(this.mag());
	if(mag) {
		this.x = this.x/mag;
		this.y = this.y/mag;
	}
};

Vec2.prototype.dist = function(vec) {
	return Math.sqrt(Math.pow((this.y - vec.y), 2) + Math.pow((this.x - vec.x), 2));
};

Vec2.prototype.scale = function(factor) {
	this.x = this.x * factor;
	this.y = this.y * factor;
};

Vec2.prototype.sub = function(vec) {
	this.x = this.x - vec.x;
	this.y = this.y - vec.y;
};

Vec2.prototype.clone = function() {
	return new Vec2(this.x, this.y);
};