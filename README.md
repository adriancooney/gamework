#HTML5 Canvas Game
Working on this canvas game when I get the time. It's built completely from the groud up so feel free to browse through the code and use classes or functions! All critique welcomed!

##Class Documentation
Any classes I feel that a particulary cool or reusable wil be documented here.

###Loader.class.js
Asset loader. Events could do with better names I think. All assets are stored in `Loader.items`

####Events
_started_  -- Loader has initiated loading assets. No params
_progress_ -- Loader has made progress. Parameters are `progress` (int), `name` (string), `item` (object)
_loaded_   -- All assets have been loaded.

####Methods
_Loader.getProgress_ -- Returns the current progress (int)
_Loader.getAsset( name )_ -- Returns asset with given name (All assets are stored in `Loader.items`)
_Loader.loadAsset( type["json", "image"], name, url )_ -- Loads asset. Supports json and image so far (but easily extendable). Returns nothing.

####Veriables
_Loader.currentlyProcessed_ -- The number of items currently processed. (int)
_Loader.totalItems_ -- The total number of items to be loaded (int)
_Loader.items_ -- The item store (object)