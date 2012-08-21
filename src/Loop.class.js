var Loop = {
	running: false,

	init: function(fn) {
		this.loop = fn;

		this.start();
	},

	start: function() {
		if(this.loopFnCache) this.loop = this.loopFnCache;
		else this.run();
	},

	run: function() {
		var that = this, frame = 0;

		if(!this.loop) throw new Error("No loop function supplied");

		(function loop(){
    		requestAnimFrame(loop);
    		that.loop.call(window, frame);
    		frame++;
		})();
	},

	stop: function() {
		//Instead of it having to check all the time
		//if this.running is true, why not pull the mat from under it's feet
		//And change the render function to just a function() {}
		//But we should never need to call this ..right?
		this.loopFnCache = this.loop;
		this.loop = function() {};
	}
};