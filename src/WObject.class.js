var WObject = function(construct) {
	this.construct = construct;

	//Just to be sure the methods are there and not have any heavy checking
	this.extend("render", function() {});
	this.extend("update", function() {});

	this.extend("attachEvent", function(ev, fn) {
		this.events = this.events || {};

		this.events[ev] = fn;
	});

	return construct;
};

WObject.prototype.extend = function(prop, fn) {
	this.construct.prototype[prop] = fn;
};

//To clarify, WObject is "World Object" not "Wobject" but you can pronounce it like you're Benga