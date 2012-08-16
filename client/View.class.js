var View = {
	states: {},
	currentState: "Loading",

	renderState: function(){ 
		this.states[this.currentState].draw();
	},

	changeState: function(state) {
		if(state in this.states) this.currentState = state;
		else throw new Error("State " + state + " does not exist.");
	},

	transition: function(transition, previousStateRenderFunc, newState) {

	},

	addState: function(name, items) {
		this.states[name] = new State();

		var that = this;
		items.forEach(function(item) {
			that.states[name].objects.push(item)
		});
	},

	addObject: function(stateName, obj) {
		this.states[name].objects.push(obj)
	}
};