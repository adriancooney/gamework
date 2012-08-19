var Zombie = function(layer) {
	var that = this;

	this.layer = layer || LayerManager.noLayerErr("Zombie");

	this.position = new Vec2(0, 0);
	this.velocity = new Vec2();

	this.health = 100;
	this.speed = 40; //Max 100
	this.strength = 90; //Max 100. Strength effects intelligence growth rate
	this.level = 1;
	this.intelligence = 10;

	this.currentAnimation = "walking";

	this.sprites = {
		walking: new Sprite(this.layer, Loader.getAsset("Ball"), this.position.x, this.position.y, 30, 30, 8),
		circle: new Shape(this.layer, "circle", { radius: 50, x: 100, y: 100 })
	};

	this.animations = {
		walking: new Animation(function(i) {
			// that.sprites.walking.setSprite(i);
			// that.sprites.walking.update();
		}, function() {
			that.sprites.circle.render();
		}, 50, true)
	}
};

Zombie.prototype.update = function() {
	if(V.key.up) console.log("Move up!");
	this.animations[this.currentAnimation].update();
};

Zombie.prototype.render = function() {
	this.animations[this.currentAnimation].render();
};
