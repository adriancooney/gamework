var Input = {
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
		V.key[key.keyIdentifier.toLowerCase()] = true;
	},

	handleKeyup: function(key) {
		V.key[key.keyIdentifier.toLowerCase()] = false;
	}
};