class Track {
	constructor(center, radius) {
		this.center = center;
		this.radius = radius;
		this.period = Math.PI;
	}

	getPostion(offset) {
		return { x: this.center.x + Math.cos(offset) * this.radius, // *3 or *5  the ball according to shape
				y: this.center.y - Math.abs(Math.sin(offset)) * this.radius, // this.center.y - Math.sin(offset) * this.radius and math.abs to change the shape,
				round: Math.floor(offset / this.period) // round
			};
	}

	draw(ctx) {
		ctx.beginPath();
		for (let a = 0; a < Math.PI * 2; a += 0.01) {
			const position = this.getPostion(a);
			ctx.lineTo(position.x, position.y
				// this.center.x + Math.cos(a * 3) * this.radius, // *3 change the shape
				// this.center.y - Math.sin(a) * this.radius
			);
		}
		ctx.closePath();
		// ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
		ctx.strokeStyle = "white";
		ctx.stroke();
	}
}