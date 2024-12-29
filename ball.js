class Ball {
	constructor(track, radius, speed, soundFrequency) {
		this.track = track;
		this.radius = radius;
		this.speed = speed;
		this.soundFrequency = soundFrequency;
		this.offset = 0;
		this.round = 0;
		this.direction = 1;
		this.center = this.track.getPostion(this.offset);
		// this.x = 0;
		// this.y = 0;
		// this.dx = 0;
		// this.dy = 0;
		// this.updatePosition();
	}

	move() {
		this.offset += this.speed * this.direction;
		this.center = this.track.getPostion(this.offset);
		if (this.center.y > this.track.center.y){
			this.direction *= -1;
			playSound(this.soundFrequency);
		}
	}
	// updatePosition() {
	// 	this.x = this.track.center.x + this.radius * Math.cos(this.offset);
	// 	this.y = this.track.center.y + this.radius * Math.sin(this.offset);
	// 	this.dx = this.speed * Math.cos(this.offset);
	// 	this.dy = this.speed * Math.sin(this.offset);
	// 	this.offset += this.speed;
	// } 
	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
		ctx.strokeStyle = "white";
		ctx.stroke();	
	}
}