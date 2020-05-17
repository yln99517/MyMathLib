var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("myMathLib/point", [], function (exports_1, context_1) {
    "use strict";
    var Point;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Point = /** @class */ (function () {
                function Point(x, y) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    this.x = x;
                    this.y = y;
                }
                Point.prototype.length = function () {
                    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
                };
                return Point;
            }());
            exports_1("Point", Point);
        }
    };
});
System.register("myMathLib/point3d", ["myMathLib/point"], function (exports_2, context_2) {
    "use strict";
    var point_1, Point3D;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (point_1_1) {
                point_1 = point_1_1;
            }
        ],
        execute: function () {
            Point3D = /** @class */ (function (_super) {
                __extends(Point3D, _super);
                function Point3D(x, y, z) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    if (z === void 0) { z = 0; }
                    var _this = _super.call(this) || this;
                    _this.z = z;
                    return _this;
                }
                Point3D.prototype.length = function () {
                    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
                };
                return Point3D;
            }(point_1.Point));
            exports_2("Point3D", Point3D);
        }
    };
});
System.register("myMathLib/vector", [], function (exports_3, context_3) {
    "use strict";
    var Vector;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            Vector = /** @class */ (function () {
                function Vector(x, y) {
                    if (x === void 0) { x = 0; }
                    if (y === void 0) { y = 0; }
                    this.x = x;
                    this.y = y;
                }
                Vector.prototype.length = function () {
                    return 1;
                };
                return Vector;
            }());
            exports_3("Vector", Vector);
        }
    };
});
System.register("myMathLib/myMath", [], function (exports_4, context_4) {
    "use strict";
    var MyMath;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            MyMath = /** @class */ (function () {
                function MyMath() {
                }
                MyMath.random = function () {
                    return Math.random();
                };
                return MyMath;
            }());
            exports_4("MyMath", MyMath);
        }
    };
});
System.register("myMathLib", ["myMathLib/point", "myMathLib/point3d", "myMathLib/vector", "myMathLib/myMath"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (Point_1) {
                exports_5("Point", Point_1);
            },
            function (Point3D_1) {
                exports_5("Point3D", Point3D_1);
            },
            function (Vector_1) {
                exports_5("Vector", Vector_1);
            },
            function (MyMath_1) {
                exports_5("MyMath", MyMath_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=myMathLib.js.map