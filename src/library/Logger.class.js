var Logger = ({
	init: function() {

		this._addStyle();

		this.loge = document.createElement("div");
		this.loge.id = "loge";

		this.logfps = document.createElement("h3");
		this.logp = document.createElement("div");

		this.loge.appendChild(this.logfps);
		this.loge.appendChild(this.logp);

		this.logfps.innerText = "MS: 0; FPS: 0";

		document.body.appendChild(this.loge);

		this._runFPS();

		return this;
	},

	log: function(msg) {
		var p = document.createElement("p");
		p.innerHTML = "<span>></span> " + msg;

		if(this.logp.children.length > 0) {
			this.logp.insertBefore(p, this.logp.children[0]);

			if(this.logp.children.length > 50) this.logp.removeChild(this.logp.children[50]);
		} else this.logp.appendChild(p);
	},

	_updateFPS: function(ms, fps) {
		this.logfps.innerText = "MS: " + ms + "; FPS: " + fps;
	},

	_addStyle: function() {
		var _style = [
			"#loge {",
				"position: fixed;",
				"height: 100%;",
				"width: 300px;",
				"right: 0;",
				"top: 0;",
				"background: rgba(71, 197, 255, 0.6);",
				"overflow-y: scroll;",
			"}",

			"#loge h3 {",
				"font-family: Arial, sans-serif;",
				"font-size: 20px;",
				"margin: 4px 8px 2px;",
				"padding: 2px;",
				"color: #334e5b;",
				"background: rgba(255, 255, 255, 0.6);",
				"text-align: center;",
			"}",

			"#loge p {",
				"font-family: Arial, sans-serif;",
				"font-size: 14px;",
				"margin: 4px 8px;",
				"color: #334e5b;",
				"border-bottom: 1px solid #5aa4c9;",
				"-webkit-box-shadow: 0 1px 0 #bae9fc;",
				"padding-bottom: 4px;",
			"}",

			"#loge p:last-child { border: none; -webkit-box-shadow: none; }"
		].join("")


		var s = document.createElement("style");
		s.innerText = _style;

		document.getElementsByTagName("head")[0].appendChild(s);
	},

	_runFPS: function() {
		var that = this,
			before = new Date, 
			sBefore = new Date,
			frame = 0,
			fBefore = 0,
			after;

		(function animloop(){
    		requestAnimFrame(animloop);
    		after = new Date;
    		if((after - sBefore) > 1000) {
    			that._updateFPS(after - before, frame - fBefore);
    			sBefore = after;
    			fBefore = frame;
    		}
    		before = after;

    		frame++;
		})();
	}
}).init();