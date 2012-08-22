var Logger = ({
	init: function() {
		this.running = true;

		var that = this;

		this._addStyle();

		this.loge = document.createElement("div");
		this.loge.id = "loge";

		this.loga = document.createElement("a");
		this.loga.id = "stoplog";
		this.loga.innerText = "Stop, you're \nscaring me.";

		this.logfps = document.createElement("h3");
		this.logp = document.createElement("div");

		if(window.Loop) {
			//Controls
			this.logc = document.createElement("section");
			this.pauseRender = document.createElement("a");8
			this.pauseRender.innerText = "Pause Loop";
			this.nextFrame = document.createElement("a");
			this.nextFrame.innerText = "Manual Render";

			this.logc.appendChild(this.pauseRender);
			this.logc.appendChild(this.nextFrame);

			this.pauseRender.addEventListener("click", function() {
				toggleLoop();
			});

			function toggleLoop() {
				if(Loop.running) {
					Loop.stop();

					this.innerText = "Resume Loop";
					that.logc.appendChild(that.nextFrame);
				} else {
					Loop.start();

					this.innerText = "Pause Loop";
					that.logc.removeChild(that.nextFrame);
				}
			}

			this.nextFrame.addEventListener("click", function() {
				View.renderState();
			});

		}

		this.loge.appendChild(this.logfps);
		this.loge.appendChild(this.loga);
		if(window.Loop) this.loge.appendChild(this.logc);
		this.loge.appendChild(this.logp);

		this.logfps.innerText = "MS: 0; FPS: 0";
		this.loga.addEventListener("click", function() {
			if(that.running) {
				that.stop();
				this.innerText = "Continue your\nlogging";
			} else {
				that.start();
				this.innerText = "Stop, you're \nscaring me.";
			}
		});


		document.body.appendChild(this.loge);

		this._runFPS();

		return this;
	},

	log: function(msg, color) {
		var p = document.createElement("p");
		if(color) p.style.color = color;
		p.innerHTML = "<span>" + (new Date).toTimeString().substr(3, 5) + "</span> > " + msg;

		this.insert(p);
	},

	bar: function() {
		var div = document.createElement("div");
		div.id = "separator";
		this.insert(div);
	},

	insert: function(e) {
		if(this.running) {

			if(this.logp.children.length > 0) {
				this.logp.insertBefore(e, this.logp.children[0]);

				if(this.logp.children.length > 50) this.logp.removeChild(this.logp.children[50]);
			} else this.logp.appendChild(e);
		}
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

			"#loge a {",
				"font-family: Arial, sans-serif;",
				"font-size: 11px;",
				"text-decoration: underline;",
				"cursor: pointer;",
			"}",

			"#loge section a {",
				"margin: 8px;",
			"}",

			"#loge #stoplog {",
				"float: right;",
				"display: block;",
				"margin-top: -29px;", //I HATE ODD NUMBERS
				"margin-right: 12px;",
			"}",

			"#loge h3 {",
				"font-family: Arial, sans-serif;",
				"font-size: 20px;",
				"margin: 4px 8px 2px;",
				"padding: 2px;",
				"color: #334e5b;",
				"background: rgba(255, 255, 255, 0.6);",
			"}",

			"#loge p {",
				"font-family: Arial, sans-serif;",
				"font-size: 14px;",
				"margin: 4px 8px;",
				"color: #334e5b;",
				"border-bottom: 1px solid #5aa4c9;",
				"-webkit-box-shadow: 0 1px 0 #bae9fc;",
				"padding-bottom: 4px;",
				"line-height: 140%;",
			"}",

			"#loge p:last-child { border: none; -webkit-box-shadow: none; }",

			"#loge p span { color: #6197b0; font-size: 10px; padding: 2px; background: rgba(255, 255, 255, 0.4); border-radius: 4px; vertical-align: center;}",

			"#separator { height: 4px; width: 100%; margin: 4px; background: rgba(0,0,0,0.2); }"
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
	},

	start: function() {
		this.running = true;
	},

	stop: function() {
		this.running = false;
	}
}).init();