var BodyManager = {
	bodies: [],

	checkCollision: function(body, fn) {
		console.logOnce(body, 12412);
		var bodies = this.bodies; //For fastness!
		for(var i = 0, cache = bodies.length; i < cache; i++) {
			var collision = body.intersect(bodies[i]);
			if(collision) {
				fn.call(body, collision);
			}
		}
	}
};