var State = function() {
	this.objects = [];
};

State.prototype.update = function() {
	this.objects.forEach(function(obj) {
		obj.update();
	});
};

State.prototype.render = function() {
	this.objects.forEach(function(obj) {
		obj.render();
	});
};

State.prototype.draw = function() {
	this.update();
	this.render();
};