declare module "myMathLib/point" {
    export class Point {
        x: number;
        y: number;
        constructor(x?: number, y?: number);
        length(): number;
    }
}
declare module "myMathLib/point3d" {
    import { Point } from "myMathLib/point";
    export class Point3D extends Point {
        z: number;
        constructor(x?: number, y?: number, z?: number);
        length(): number;
    }
}
declare module "myMathLib/vector" {
    export class Vector {
        x: number;
        y: number;
        constructor(x?: number, y?: number);
        length(): number;
    }
}
declare module "myMathLib/myMath" {
    export class MyMath {
        static random(): number;
    }
}
declare module "myMathLib" {
    export * as Point from "myMathLib/point";
    export * as Point3D from "myMathLib/point3d";
    export * as Vector from "myMathLib/vector";
    export * as MyMath from "myMathLib/myMath";
}
