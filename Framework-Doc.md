#Framework Documentation
This is the documentation for my canvas games for quick game prototyping. It's a simple 2D framework which follows no conventions (that I'm aware of) structurally. This is coming from a guy with no prior game development experience or any formal education. Forgive my writing style and you *probably* will find typos around the place.

##Basic concept
This engine is built around a loop which calls the render function on a state roughly 60 times per second i.e. 60 fps. It renders the currently active state which is got from the View class. States are basically just object stores but in an organized and manageable way. States represent the different states of a game for lack of a better explanation. A state within a game could be a loading screen or the game menu. Objects, in the context of the engine, are worldly things that are rendered and updated throughout the game. They don't necessarily need to be units or characters, they represent everything from buttons to radars to background timers. Everytime a state is rendered, it loops through it's `objects` property (which is an array of worldly objects) and call's their `update` and `render` functions respectively. 

All objects that do not inherit the `WObject` class **must** have an update and render function. I decided that this would be best for performance instead of checking everytime to see if it exists or not. They don't have to do anything, just exist.

##States
As explained earlier, states represent different screens within a game. You load you inital state and then the others are loaded  via events from user input or timers.

Adding a state is simple. I like to contain them in their own class but this isn't necessary. To add a state, you first must realize the objects necessary for the state to operate. Of course objects can be added dynamically into the queue later on but for things such as backgrounds, it's important.

	View.addState(name, [WObject Array])

**IN PROGRESS**

