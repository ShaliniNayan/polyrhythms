class Track {
	constructor(center, radius) {
		this.center = center;
		this.radius = radius;
	}

	getPostion(offset) {
		return { x: this.center.x + Math.cos(offset) * this.radius, 
				y: this.center.y - Math.sin(offset) * this.radius 
			};
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
		ctx.strokeStyle = "white";
		ctx.stroke();
	}
}