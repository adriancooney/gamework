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

/*****************************************
 * 				Dynamics
 *****************************************/

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

/*****************************************
 * 			Collision detection
 *****************************************/

Body.prototype.intersect = function(body) {
	return this["_checkCollision" + body.wobject.type + "V" + wobject.type](body);
};

Body.prototype.collision = Body.prototype.intersect;
Body.prototype.collidedWith = Body.prototype.intersect;

/* Possible combinations
 * X collides with Y
 * Circle collides with Rect
 * Rect collides with Polygon
 * Polygon collides with Circle
 * Circle collides with Circle
 * Rect collides with Rect
 * Polygon collides with Polygon with the equivilent of 7 atomic bombs on the cpu
 */

Body.prototype._pointInCircle = function(cp, radius, op) {
	return (cp.dist(op)) < radius;
};

//Like v Like
Body.prototype._checkCollisionCircleVCircle = function(circle1, circle2) {
	//Check the collision, if collision return angle of incidence
	return (body.position.dist(this.position)) <= (this.wobject.radius + body.wobject.radius))
};
Body.prototype._checkCollisionRectVRect = function(rect1, rect2m) {};
//This is the definition of clusterfuck and I haven't even written it yet.
Body.prototype._checkCollisionPolygonVPolygon = function(poly1, poly2) {};


//Unlike v Unlike
Body.prototype._checkCollisionCircleVRect = function(circle, rect) {
	var x = rect.position.x,
		y = rect.position.y,
		w = rect.wobject.width,
		h = rect.wobject.height;
		
	//Top left, top right, bottom right, bottom left
	var points = [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
	//Whoah, this one was a lot to work out than I though!
	for(var i = 0; i < 3; i++) 
		if(this._pointInCircle(points[i][0], points[i][1])) return true;
};

Body.prototype._checkCollisionCircleVPolygon = function(circle, poly) {};

Body.prototype._checkCollisionRectVPolygon = function(rect, poly) {};

/*****************************************
 * 				Rendering
 *****************************************/

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
