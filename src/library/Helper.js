/*
 * Dev tool for only loggin once
 * Great for logging inside the renderer
 */ 
console.loggedOnceStore = {};

console.logOnce = function(data, uid) {
	var storeName = "";
	//Simple algorithm to get a unique, short id from the data, only works for string though
	if(typeof data === "string") {
		for(var i = 0, cache = (data.length/2); i < cache; i++) storeName += data[i*2];
	} else {
		storeName = uid;
	}

	if(!this.loggedOnceStore[storeName]) {
		console.log(data);
		this.loggedOnceStore[storeName] = true;
	}
};

/*
 * Paul Irish's polyfill for requestAnimationFrame
 */
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

/*
 * Remove any `undefined` within an array. Useful
 * for when `delete`'ing from an array. Does not
 * change the original array but returns a new one
 * free of any undefined. 
 */
Array.prototype.refresh = function() {
	return this.filter(function() { return true; });
};

/*
 * Inherit all properties if they don't exist
 * This include prototypes
 */

Object.prototype.inherit = function(clas) {
	//Do properties first
	for(var prop in clas) {
		if(prop == "prototype") continue;
		console.log(prop);
		if(!this[prop]) this[prop] = clas[prop];
	}

	for(var func in clas.prototype) {
		console.log(func);
		if(!this.prototype[func]) this.prototype[func] = clas.prototype[func]
	}
};