class Fireball extends Entity {
	constructor(game, x, y, speedX, speedY) {
		super(game, x, y);


		this.timer = 0;
		this.spdX = speedX;
		this.spdY = speedY;
		this.width = 267;
		this.height = 266;
		this.scale = .2;
		this.frameWidth = this.width * this.scale;
		this.frameHeight = this.height * this.scale;;
		this.damage = 1;
		this.health = 100;

		this.scale
		let img = AM.getAsset("./img/enemies/skull/fireball.png");
		this.fireballAnimation = new Animation(
			img,
			this.width,
			this.height,
			3,
			.4,
			12,
			true,
			this.scale);

	}
	update() {
		this.updatePosition();
		this.boundX = this.x;
		this.boundY = this.y;
		this.updateMyHitBoxes();
	}
	draw(ctx) {
		this.fireballAnimation.drawFrame(
			this.game.clockTick,
			ctx,
			this.x,
			this.y
		);
	}

	updatePosition() {
		this.x += this.spdX;
		this.y += this.spdY;

		if (this.x < 0 || this.x > this.game.camera.mapWidth) {
			this.spdX = -this.spdX;
			this.health = -1;
		}
		if (this.y < 0 || this.y > this.game.camera.mapHeight) {
			this.spdY = -this.spdY;
			this.health = -1;
		}
		if (this.health <= 0) {
			this.isDead = true;
		}
	}
}