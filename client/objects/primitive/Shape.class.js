var Shape = function(shape, data) {
	this.shape = shape;
	this.data = data || {};

	//Set some global variables (within scope, irony?)
	this.fillStyle = this.data.fillStyle || "#000";
	this.strokeStyle = this.data.strokeStyle;
	this.x = this.data.x || this._error("No x value supplied.");

	if(this["_" + shape]) this["_" + shape].call(this);
	else this._path();
};

Shape.prototype.update = function(prop, val) {
	if(typeof prop === "object") {
		for(var key in prop) this[key] = prop[key];
	} else if(typeof prop === "string") {
		this[prop] = val;
	}
};

Shape.prototype.render = function() {
	this.renderFn.call(this);
	this._fill();
	this._stroke();
};

Shape.prototype._circle = function() {
	this.radius = this.data.radius || this._error("No radius supplied.");
	this.width = this.radius;
	this.height = this.radius;

	this.renderFn = function() {
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
	};
};

Shape.prototype._rect = function() {
	this.width = this.data.width || this._error("No width supplied.")
	this.height = this.data.height || this._error("No height supplied.")

	this.renderFn = function() {
		ctx.rect(this.x, this.y, this.width, this.height);
	};
};

Shape.prototype._rectangle = Shape.prototype._rect;

Shape.prototype._square = function(){ 
	this.width = this.height = this.data.side || this._error("No side supplied.");
	this.renderFn = function() {
		ctx.rect(this.x, this.y, this.width, this.height);
	};
};

Shape.prototype._path = function() {
	this.path = this.path || this._compilePath(this.shape); 

	this.renderFn = function() {
		console.log(this.path);
		this._renderPath(this.path);
	};
};

Shape.prototype._compilePath = function(path) {
	var fns = {
		m: "moveTo",
		l: "lineTo"
	};

	return path.split(" ").map(function(p) {
		var m = p.match(/([MLml])(\d+),(\d+)/);

		if(m) {
			if(m[1].toLowerCase() in fns) {
				return [fns[m[1].toLowerCase()], [m[2], m[3]]];
			}
		}
	});
};

Shape.prototype._renderPath = function(pathArr) {
	ctx.beginPath();
	ctx.translate(this.x || 0, this.y || 0);

	pathArr.forEach(function(fn) { 
		new Function("ctx." + fn[0] + "(" + fn[1][0] + "," + fn[1][1] + ")").call(window);
	});

	ctx.closePath();
};

Shape.prototype._stroke = function() {
	if(this.data.strokeStyle) {
		ctx.strokeStyle = this.strokeStyle;
		ctx.stroke();
	}
};

Shape.prototype._fill = function() {
	ctx.fillStyle = this.fillStyle;
	ctx.fill();
};

Shape.prototype._error = function(msg) {
	throw new Error("Shape error: " + this.shape + ", " + msg);
};