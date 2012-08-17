var View = {
	states: {},
	currentState: "Loading",

	renderState: function(){ 
		this.states[this.currentState].draw();
	},

	changeState: function(state) {
		if(state in this.states) {
			if(!this.states[state].initiated) this.states[state].init();
			this.currentState = state;
		} else throw new Error("State " + state + " does not exist.");
	},

	transition: function(transition, previousStateRenderFunc, newState) {

	},

	addState: function(name, fn) {
		this.states[name] = new State();
		this.states[name].fn = fn;
	},

	addObject: function(obj) {
		this.states[this.currentState].objects.push(obj)
	}
};