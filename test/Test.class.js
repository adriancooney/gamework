var Test = {
	test: {},

	add: function(name, test) {
		this.test[name] = test;
	},

	run: function(name) {
		this.test[name]();
	}
};