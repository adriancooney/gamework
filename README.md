#HTML5 Canvas Game
Working on this canvas game when I get the time. It's built completely from the groud up so feel free to browse through the code and use classes or functions! All critique welcomed!

##Class Documentation
Any classes I feel that a particulary cool or reusable wil be documented here.

###Loader.class.js
Asset loader. Events could do with better names I think. All assets are stored in `Loader.items`

####Events
*started*  -- Loader has initiated loading assets. No params
*progress* -- Loader has made progress. Parameters are `progress` (int), `name` (string), `item` (object)
*loaded*   -- All assets have been loaded.

####Methods
*`Loader.getProgress`* -- Returns the current progress (int)
*`Loader.getAsset( name )`* -- Returns asset with given name (All assets are stored in `Loader.items`);
*`Loader.loadAsset( type["json", "image"], name, url )`* -- Loads asset. Supports json and image so far (but easily extendable). Returns nothing.

####Veriables
*`Loader.currentlyProcessed`* -- The number of items currently processed. (int)
*`Loader.totalItems`* -- The total number of items to be loaded (int)
*`Loader.items`* -- The item store (object)