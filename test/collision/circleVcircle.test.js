Test.add("collision/circleVcircle", function() {
	Logger.log("Initiating Circle V Circle test");
	Logger.log("Adding circle; r = 50, x = 50%, y = 0, rigid = false");
	View.addObject(new Body(new Circle(layer, {
		radius: 50,
		x: layer.canvas.width/2,
		y: 0
	}), {
		rigid: false
	}));

	Logger.log("Adding circle; r = 80, x= 50%, y = 100%, ridid = true");
	View.addObject(new Body(new Circle(layer, {
		radius: 80,
		x: layer.canvas.width/2,
		y: layer.canvas.height
	}), {
		rigid: true,
		collision: function() {
			Logger.log("OMG COLLISION", "blue");
		}
	}));
});