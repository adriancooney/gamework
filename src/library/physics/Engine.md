Brainstorming a couple of ideas here for making the engine as efficient as possible. Although looping through an array of bodies and checking collisions is necessary (well for the foreseeable future), what matters is the size of that body ..*I think*. To the test machine! Well we definitely won't be using forEach, [take a look](http://jsperf.com/large-arrays-vs-small-arrays).

####Things to try
* Split 2d field up into tiles and get those within proximity and loop through them 
* Collisions check separately inside their own update loop