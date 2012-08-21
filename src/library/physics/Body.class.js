var Body = new WObject(function(wobject, options) {
	var that = this;

	this.wobject = wobject;

	this.options = {
		rigid: false,

		initialVelocity: new Vec2(0, 0),
		initialAcceleration: new Vec2(0, 0),

		restitution: 1,
		gravity: new Vec2(0, 0.05),
		friction: new Vec2(0, 0)
	};

	for(var prop in options) this.options[prop] = options[prop];

	this.position = new Vec2(this.wobject.x, this.wobject.y);
	this.velocity = this.options.initialVelocity;
	this.force = new Vec2(0, 0);
	this.acceleration = this.options.initialAcceleration;

	this.wobject.update = function() {
		var pos = that._updateVars();

		this.x = pos[0];
		this.y = pos[1];

		BodyManager.checkCollision(wobject.type, wobject, function(arr) {
			console.log(arr);
		});
	};
});

Body.prototype._circle = function() {
	return []
};

Body.prototype._rectangle = function() {

};

Body.prototype._updateVars = function() {
	//Logger.log(this.force.x, this.force.y)
	this._updateAcceleration();
	//Logger.log(this.acceleration.x, this.acceleration.y)
	this._updateVelocity();
	//Logger.log(this.velocity.x, this.velocity.y)
	this._updatePosition();
	//Logger.log(this.position.x, this.position.y)

	return [this.position.x, this.position.y];
};

Body.prototype._updateAcceleration = function() {
	this.force.add(this.options.gravity);
	this.acceleration.add(this.force);
};

Body.prototype._updateVelocity = function() {
	this.velocity.add(this.acceleration);
};

Body.prototype._updatePosition = function() {
	this.position.add(this.velocity);
};

Body.prototype.force = function(force) {
	this.force = force;
};

Body.prototype.within = function(body) {
	return this["_checkCollision" + body.wobject.type + "V" + wobject.type](body);
};

Body.prototype._checkCollisionCircleVCircle = function(body) {
	return (Math.sqrt(Math.pow(body.position.y - this.position.y) + Math.pow(body.position.x - body.position.y)) <= (this.wobject.radius + body.wobject.radius))
};

Body.prototype._checkCollisionCircleVRect = function(body) {
	
};

Body.prototype.update = function() {
	var pos = this._updateVars();

	this.wobject.x = pos[0];
	this.wobject.y = pos[1];

	BodyManager.checkCollision(this.wobject.type, this.wobject, function(arr) {
		console.log(arr);
	});
};

Body.prototype.render = function() {
	this.wobject.render();
};
