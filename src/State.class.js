var State = function() {
	this.objects = [];
	this.initiated = false;
};

State.prototype.update = function() {
	for(var i = 0, cache = this.objects.length; i < cache; i++) this.objects[i].update();
};

State.prototype.render = function() {
	for(var i = 0, cache = this.objects.length; i < cache; i++) {
		this.objects[i].render();
	}
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