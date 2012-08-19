#HTML5 Canvas Game
Working on this canvas game when I get the time. It's built completely from the ground up and made to be completely modular so feel free to browse through the code and use classes or functions! Just as a heads up, naming isn't my strong point so prepared to be slightly confused if your strict on conventions. All critique welcomed!

##Objects
All objects that may be rendered in a scene **must** have a `update` and `render` function even if the object doesn't have to be updated.

##Class Documentation
Any classes I feel that a particulary cool or reusable wil be documented here.

##Loader.class.js
Asset loader. Events could do with better names I think. All assets are stored in `Loader.items`

###Events
__started__  -- Loader has initiated loading assets. No params

__progress__ -- Loader has made progress. Parameters are `progress` (int), `name` (string), `item` (object)

__loaded__   -- All assets have been loaded.

###Methods
__Loader.getProgress__ -- Returns the current progress (int)

__Loader.getAsset( name[string] )__ -- Returns asset with given name (All assets are stored in `Loader.items`)

__Loader.loadAsset( type["json", "image"], name[string], url[string] )__ -- Loads asset. Supports json and image so far (but easily extendable). Returns nothing.

###Variables
__Loader.currentlyProcessed__ -- The number of items currently processed. (int)

__Loader.totalItems__ -- The total number of items to be loaded (int)

__Loader.items__ -- The item store (object)

##Animation.class.js
Animation object that runs through an animation.

###Methods
__Animation( update[function], render[function], count[int], repeat[bool] )__ -- Constructor.

__Animation.update( frame[int] )__ -- Update the animation using the frame.

__Animation.render()__ -- Render the animation using the render function supplied.

##Shape.class.js
For drawing shapes. Pretty nifty.

###Methods
__Shape( type["square", "rectangle", "circle", path], options)__ -- Constructor.

<table>
	<tr>
		<th>Shape</th><th>Properties required</th><th>Properties Optional</th>
	</tr>
	<tr>
		<td>circle</td><td>x, y, radius</td><td>fillStyle, strokeStyle</td>
	</tr>
	<tr>
		<td>square</td><td>x, y, side</td><td>fillStyle, strokeStyle</td>
	</tr>
	<tr>
		<td>rect or rectangle</td><td>x, y, width, height</td><td>fillStyle, strokeStyle</td>
	</tr>
	<tr>
		<td>path*</td><td>x, y</td><td>width, height, fillStyle, strokeStyle</td>
	</tr>
</table>

> *Path -- Paths are a simplified version of vector paths. Currently only supports move (m) and (l) in the form of "<m|l><x coord>,<y coord><space>". Paths are automatically closed.

__Shape.render()__ -- Render the shape
__Shape.update( obj[Object] ) | ( prop[string], val )__ -- Update a property of the shape. If using an object, it will update corresponding keys with their values. Values are also accessible via the dot operator on the shape instance. e.g. new Shape().value

###Example

	var rect = new Shape("rect", {
		x: 50,
		y: 50,
		width: 300,
		height: 90
	});

	//draw a square
	var p = new Shape("m0,0 l50,0 l50,50 l0,50", {
		x: 50,
		y: 50
	});
