var Body = function(wobject, options) {
	var that = this;

	this.wobject.update = function() {
		Manager.checkCollision(that["_" + this.shape]());
	};
};

Body.prototype._circle = function() {

};

Body.prototype._rectangle = function() {

};

Body.prototype._updateVars = function() {

};

Body.prototype.force = function(vec) {

};


