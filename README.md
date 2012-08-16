#HTML5 Canvas Game
Working on this canvas game when I get the time. It's built completely from the groud up so feel free to browse through the code and use classes or functions! All critique welcomed!

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

__Loader.getAsset( name )__ -- Returns asset with given name (All assets are stored in `Loader.items`)

__Loader.loadAsset( type["json", "image"], name, url )__ -- Loads asset. Supports json and image so far (but easily extendable). Returns nothing.

###Veriables
__Loader.currentlyProcessed__ -- The number of items currently processed. (int)

__Loader.totalItems__ -- The total number of items to be loaded (int)

__Loader.items__ -- The item store (object)