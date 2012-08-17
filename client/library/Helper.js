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
 * Remove any `undefined` within an array. Useful
 * for when `delete`'ing from an array. Does not
 * change the original array but returns a new one
 * free of any undefined. 
 */
Array.prototype.refresh = function() {
	return this.filter(function() { return true; });
};