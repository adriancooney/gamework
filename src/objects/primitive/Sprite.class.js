var Sprite = new WObject(function(layer, asset, x, y, width, height, spriteCount) {
	//For the physics class
	this.type = "polygon";

	//Source image x, y
	this.sx = 0;
	this.sy = 0;

	if(!width || !height) throw new Error("Please specify a width and height for sprite.")
	//Source image height and width
	this.sw = width;
	this.sh = height;

	//Canvas x, y
	this.x = x;
	this.y = y;

	//Canvas width/height
	this.width = width;
	this.height = height;

	this.spritePos = 0;

	this.img = asset;

	this.spriteCount = spriteCount;

	this.layer = layer || LayerManager.noLayerErr("Sprite");
});

Sprite.prototype.setSprite = function(spriteInt) {
	if(spriteInt > this.spriteCount) throw new Error("Setting sprite int the is larger than the sprite count.");
	this.spritePos = spriteInt;
};

Sprite.prototype.update = function() {
	this.sy = this.spritePos * this.height;
};

Sprite.prototype.render = function() {
	this.layer.ctx.save();
	//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight). Thanks MDN.
	this.layer.ctx.drawImage(this.img, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.width, this.height);
	this.layer.ctx.restore();
};