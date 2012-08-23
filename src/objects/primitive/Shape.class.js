var Shape = new WObject(function(layer, shape, data) {
	this.layer = layer || LayerManager.noLayerErr("Shape");
	this.shape = shape;
	this.data = data || {};

	//Set some global variables (within scope, irony?)
	this.fillStyle = this.data.fillStyle || "#000";
	this.strokeStyle = this.data.strokeStyle;
	this.x = this.data.x === undefined ? this._error("No x value supplied.") : this.data.x;
	this.y = this.data.y === undefined ? this._error("No y value supplied.") : this.data.y;

	this.angle = this.data.angle || 0;

	if(this["_" + shape]) this["_" + shape].call(this);
	else this._path();
});

Shape.prototype.update = function(prop, val) {
	if(typeof prop === "object") {
		for(var key in prop) this[key] = prop[key];
	} else if(typeof prop === "string") {
		this[prop] = val;
	}
};

Shape.prototype.render = function() {
	Logger.log(this.x + " " + this.y);
	this.renderFn.call(this);
	this._fill();
	this._stroke();
};

Shape.prototype.pytag = function(opp, adj, hyp) {
	if(opp && adj && !hyp) return Math.sqrt(Math.pow(opp, 2) + Math.pow(adj, 2));
	if((!opp && adj && hyp) || (!adj && opp && hyp)) return Math.sqrt(Math.pow(hyp, 2)/Math.pow(adj || opp, 2));
};

Shape.prototype._circle = function() {
	this.radius = this.data.radius || this._error("No radius supplied.");
	this.width = this.radius;
	this.height = this.radius;
	this.type = "Circle";

	this.renderFn = function() {
		this.layer.ctx.beginPath();
		this.layer.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
	};
};

Shape.prototype._rect = function() {
	this.width = this.data.width || this._error("No width supplied.")
	this.height = this.data.height || this._error("No height supplied.")
	
	if(!this.angle) {
		this.type = "Rect";

		this.renderFn = function() {
			this.layer.ctx.rect(this.x, this.y, this.width, this.height);
		};
	} else {
		this.type = "Polygon";

		this.renderFn = function() {
			this.layer.ctx.beginPath();

			var x = this.x, y = this.y,
				w = this.width, w2 = w/2,
				h = this.height, h2 = h/2,
				diagional2 = this.pytag(h2, w2),
				lowerAngle = Math.atan(h2, w2),
				upperAngle = 180 - lowerAngle,
				rotation = this.angle;

			//The center of the rect is our center point, we must move to the lower left corner
			this.layer.ctx.moveTo(x - (diagional2 * Math.cos(lowerAngle + rotation)), y + (diagional2 * Math.sin(lowerAngle + rotation)));
			//Bottom right
			this.layer.ctx.lineTo(x + (diagional2 * Math.cos(rotation - lowerAngle)), y + (diagional2 * Math.cos(rotation - lowerAngle)));
			//Top right
			this.layer.ctx.lineTo(x + (diagional2 * Math.cos(lowerAngle + rotation)), y - (diagional2 * Math.sin(lowerAngle + rotation)));
			//Top left
			this.layer.ctx.lineTo(x - (diagional2 * Math.cos(rotation - lowerAngle)), y - (diagional2 * Math.cos(rotation - lowerAngle)));

			this.layer.ctx.closePath();

		};
	}
};

Shape.prototype._square = function(){
	this.type = "Rect";
	this.width = this.height = this.data.side || this._error("No side supplied.");
	this.renderFn = function() {
		this.layer.ctx.rect(this.x, this.y, this.width, this.height);
	};
};

Shape.prototype._path = function() {
	this.type = "Polygon";
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

	this.points = [];
	var that = this;

	return path.split(" ").map(function(p) {
		var m = p.match(/([MLml])(\d+),(\d+)/);

		if(m) {
			if(m[1].toLowerCase() in fns) {
				that.points.push([m[2], m[3]]);
				return [fns[m[1].toLowerCase()], [m[2], m[3]]];
			}
		}
	});
};

Shape.prototype._renderPath = function(pathArr) {
	this.layer.ctx.beginPath();
	this.layer.ctx.translate(this.x || 0, this.y || 0);

	pathArr.forEach(function(fn) { 
		new Function("this.layer.ctx." + fn[0] + "(" + fn[1][0] + "," + fn[1][1] + ")").call(window);
	});

	this.layer.ctx.closePath();
};

Shape.prototype._stroke = function() {
	if(this.data.strokeStyle) {
		this.layer.ctx.strokeStyle = this.strokeStyle;
		this.layer.ctx.stroke();
	}
};

Shape.prototype._fill = function() {
	this.layer.ctx.fillStyle = this.fillStyle;
	this.layer.ctx.fill();
};

Shape.prototype._error = function(msg) {
	throw new Error("Shape error: " + this.shape + ", " + msg);
};

//Shortcuts
var Circle = function(layer, options) {
	return new Shape(layer, "circle", options);
};

var Rect = function(layer, options) {
	return new Shape(layer, "rect", options);
};

var Polygon = function(layer, path, options) {
	return new Shape(layer, path, options);
};