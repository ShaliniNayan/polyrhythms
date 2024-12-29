class Ball {
	constructor(track, radius, speed, soundFrequency, hue) {
		this.track = track;
		this.radius = radius;
		this.speed = speed;
		this.soundFrequency = soundFrequency;
		this.hue = hue; 
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
		this.offset += this.speed;
		const res = this.track.getPostion(this.offset); // Get the position of the ball according to the track and the offset of the ball
		this.center = { x: res.x, y: res.y }; // Update the position of the ball
		if (res.round != this.round) {
			// this.direction *= -1;
			playSound(this.soundFrequency);
			this.round = res.round;
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
		// const fakeY = 2 * this.track.center.y - this.center.y; // 
		// 	if (fakeY > this.center.y) { // If the ball is above the track, then the ball is below the track
			ctx.beginPath();
			ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
			ctx.lineWidth = 2; // Change the width of the ball
			ctx.strokeStyle = "white";
			ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`; // Change the color
			ctx.fill();
			ctx.stroke();
	}
}