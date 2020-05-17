import {Point} from './point';

export class Point3D extends Point {
	constructor(x = 0, y = 0, public z = 0) {
		super();
	}
	length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
	}
}