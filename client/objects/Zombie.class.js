var Zombie = function() {
	this.position = new Vec2(0, 0);
	this.velocity = new Vec2();

	this.health = 100;
	this.speed = 40; //Max 100
	this.strength = 90; //Max 100. Strength effects intelligence growth rate
	this.level = 1;
	thia.intelligence = 10;

	this.sprites = [];
	this.currentSprite = 1;
};

Zombie.prototype.update = function() {
	if(V.key.up) console.log("Move up!");
};

Zombie.prototype.render = function() {

};
