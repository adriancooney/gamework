var Input = {
	keys: [],

	init: function(opt) {
		if(opt.mouse) this.bindMouse();
		if(opt.keyboard) {
			window.addEventListener("keydown", this.handleKeydown);
			window.addEventListener("keyup", this.handleKeyup);
		}
	},

	handleMouse: function(mouse, type) {
		var objs = Input._checkObjsOnCurrentState(mouse.offsetX, mouse.offsetY);
		if(objs.length > 0) objs.forEach(function(obj) {
			if(obj[type]) obj[type].call(mouse, obj);
		})
	},

	_checkObjsOnCurrentState: function(mx, my) {
		return View.states[View.currentState].objects.filter(function(obj) {
			if(!obj.x || !obj.y || !obj.height || !obj.width) return false;
			else if(mx > obj.x && mx < (obj.x + obj.width)
					 && my > obj.y && my < (obj.y + obj.height)) return obj;
		})
	},

	handleKeydown: function(key) {
		this.keys[key.keyIdentifier.toLowerCase()] = true;
	},

	handleKeyup: function(key) {
		this.keys[key.keyIdentifier.toLowerCase()] = false;
	},

	bindMouse: function() {
		["click", "dblclick", "mousedown", "mouseup", "mousemove"].forEach(function(e) {
		    Array.prototype.forEach.call(document.querySelectorAll("#container canvas"), function(e) {
		    	e.addEventListener(e, function(m) { 
		        	Input.handleMouse(m, e);
		    	});
		    });
		});
	}
};