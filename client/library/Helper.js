console.loggedOnceStore = {};

console.logOnce = function(data) {
	var storeName = "";
	//Simple algorithm to get a unique, short id from the data, only works for string though
	if(typeof data === "string") {
		for(var i = 0, cache = (data.length/2); i < cache; i++) storeName += data[i*2];
	} else {
		
	}

	if(!this.loggedOnceStore[storeName]) {
		console.log(data);
		this.loggedOnceStore[storeName] = true;
	}
};