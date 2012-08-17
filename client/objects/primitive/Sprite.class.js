var Sprite = function(asset, x, y, width, height, spriteCount) {
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
};

Sprite.prototype.setSprite = function(spriteInt) {
	this.spritePos = spriteInt;
};

Sprite.prototype.update = function() {
	this.sy = this.spritePos * this.height;
};

Sprite.prototype.render = function() {
	ctx.save();
	console.logOnce(this.img, 1435);
	console.logOnce("Sx: " + this.sx, 1345);
	console.logOnce("sy: " + this.sy, 3453214);
	console.logOnce("sw: " + this.sw, 345);
	console.logOnce("sh: " + this.sh, 87648754);
	console.logOnce("x: " + this.x, 521253);
	console.logOnce("y: " + this.y, 21352135);
	console.logOnce("width: " + this.width, 12351235);
	console.logOnce("height: " + this.height, 1425);
	//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight). Thanks MDN.
	ctx.drawImage(this.img, this.sx, this.sy, this.sw, this.sh, this.x, this.y, this.width, this.height);
	ctx.restore();
};