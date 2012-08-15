var View = {
	states: {},
	currentState: "Menu",

	renderState: function(){ 
		this.states[this.currentState].draw();
	},

	changeState: function(state) {
		if(state in this.states) this.currentState = state;
		else throw new Error("State " + state + " does not exist.");
	},

	transition: function(transition, previousStateRenderFunc, newState) {

	}
};