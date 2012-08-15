/**
 * It's the year 2018 and humans have started to rebuild. The zombies
 * are now the minority and have turned to game. The few rising to 
 * power have created a system that can control zombies once tagged.
 * The game is for one player, to control the zombie and make it survive
 * the hunters.

 * It's the year 2018 and humans have started to rebuild. The zombies
 * are now the minority and are thrust into hiding. They have adapted
 * over the years due to the nature of the infection. It was once the
 * virus that was the threat but it was the "cure" that destroyed 
 * everything. People died regardless but it was the drug that brought
 * them back to life. They weren't the same, cannibals with instinct who's
 * bodies started to disintigrate unless they fed. Now they are hiding,
 * surviving but not for long unless..
 */

require("./Helper.class.js");

var Now 		   = require("now"),
	Express 	   = require("express"),

    ZombieManager  = require("./ZombieManager.class.js").ZombieManager,
    HumanManager   = require("./HumanManager.class.js").HumanManager,
    Player 	       = require("./Player.class.js").Player;

/**
 * Server for serving client stuff
 */


var App = Express();

App.get("/", function(req, res) {
	
});



