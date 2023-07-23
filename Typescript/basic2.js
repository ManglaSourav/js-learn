var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classes - members are public by default
var Point = /** @class */ (function () {
    // Constructor - the public/private keywords in this context will generate
    // the boiler plate code for the property and the initialization in the
    // constructor.
    // In this example, "y" will be defined just like "x" is, but with less code
    // Default values are also supported
    function Point(x, y) {
        if (y === void 0) { y = 0; }
        this.y = y;
        this.x = x;
    }
    // Functions
    Point.prototype.dist = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    // Static members
    Point.origin = new Point(0, 0);
    return Point;
}());
// Classes can be explicitly marked as implementing an interface.
// Any missing properties will then cause an error at compile-time.
var PointPerson = /** @class */ (function () {
    function PointPerson() {
    }
    PointPerson.prototype.move = function () { };
    return PointPerson;
}());
var p1 = new Point(10, 20);
var p2 = new Point(25); //y will be 0
// console.log(p1.dist());
// console.log(p1.y); //error
// Inheritance
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        if (z === void 0) { z = 0; }
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    // Overwrite
    Point3D.prototype.dist = function () {
        var d = _super.prototype.dist.call(this);
        return Math.sqrt(d * d + this.z * this.z);
    };
    return Point3D;
}(Point));
// Modules, "." can be used as separator for sub modules
var Geometry;
(function (Geometry) {
    var Square = /** @class */ (function () {
        function Square(sideLength) {
            if (sideLength === void 0) { sideLength = 0; }
            this.sideLength = sideLength;
        }
        Square.prototype.area = function () {
            return Math.pow(this.sideLength, 2);
        };
        return Square;
    }());
    Geometry.Square = Square;
})(Geometry || (Geometry = {}));
var s1 = new Geometry.Square(5);
// Local alias for referencing a module
var G = Geometry;
var s2 = new G.Square(10);
var S = Geometry.Square;
var s3 = new S(15);
// console.log(s1, s2, s3);
// Generics
// Classes
var Tuple = /** @class */ (function () {
    function Tuple(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
    return Tuple;
}());
// And functions
var pairToTuple = function (p) {
    return new Tuple(p.item1, p.item2);
};
var tuple = pairToTuple({ item1: "hello", item2: "world" });
// console.log(tuple);
// Including references to a definition file:
/// <reference path="jquery.d.ts" />
// Template Strings (strings that use backticks)
// String Interpolation with Template Strings
var namee = 'Tyrone';
var greeting = "Hi ".concat(namee, ", how are you?");
// Multiline Strings with Template Strings
var multiline = "This is an example\nof a multiline string";
var per1 = { name: "Tyrone", age: 42 };
// per1.age = 25; // Error, p1.age is read-only
var per2 = { name: "John", age: 60 };
var per3 = per2; // Ok, read-only alias for p2
// per3.age = 35; // Error, p3.age is read-only
per2.age = 45; // Ok, but also changes p3.age because of aliasing
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2018;
        this.make = "Unknown Make"; // Assignment permitted in constructor
        this.model = "Unknown Model"; // Assignment permitted in constructor
    }
    return Car;
}());
var numbers = [0, 1, 2, 3, 4];
var moreNumbers = numbers;
var order1 = "A regular Cappuccino";
var order2 = "A large Espresso";
// let order3: Order = "A small Espresso"; // Error
// console.log(order1, order2, order3);
