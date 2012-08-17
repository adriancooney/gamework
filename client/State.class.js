var State = function() {
	this.objects = [];
	this.initiated = false;
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

State.prototype.init = function() {
	var items = this.fn(), that = this;

	items.forEach(function(item) {
		that.objects.push(item);
	});

	this.initiated = true;
};