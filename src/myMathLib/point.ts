export class Point {
	constructor(public x = 0, public y = 0) {
	}
	length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}