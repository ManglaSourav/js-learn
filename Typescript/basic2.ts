// Classes - members are public by default
class Point {
  // Properties
  x: number;

  // Constructor - the public/private keywords in this context will generate
  // the boiler plate code for the property and the initialization in the
  // constructor.
  // In this example, "y" will be defined just like "x" is, but with less code
  // Default values are also supported

  constructor(x: number, private y: number = 0) {
    this.x = x;
  }

  // Functions
  dist(): number { 
    return Math.sqrt(this.x * this.x + this.y * this.y); 
  }

  // Static members
  static origin = new Point(0, 0);
}

interface Person {
  name: string;
  // Optional properties, marked with a "?"
  age?: number;
  // And of course functions
  move(): void;
}

// Classes can be explicitly marked as implementing an interface.
// Any missing properties will then cause an error at compile-time.
class PointPerson implements Person {
    name: string
    move() {}
}

let p1 = new Point(10, 20);
let p2 = new Point(25); //y will be 0
// console.log(p1.dist());
// console.log(p1.y); //error

// Inheritance
class Point3D extends Point {
  constructor(x: number, y: number, public z: number = 0) {
    super(x, y); // Explicit call to the super class constructor is mandatory
  }

  // Overwrite
  dist(): number {
    let d = super.dist();
    return Math.sqrt(d * d + this.z * this.z);
  }
}

// Modules, "." can be used as separator for sub modules
module Geometry {
  export class Square {
    constructor(public sideLength: number = 0) {
    }
    area() {
      return Math.pow(this.sideLength, 2);
    }
  }
}
let s1 = new Geometry.Square(5);

// Local alias for referencing a module
import G = Geometry;
let s2 = new G.Square(10);

import S = Geometry.Square;
let s3  = new S(15)
// console.log(s1, s2, s3);

// Generics
// Classes
class Tuple<T1, T2> {
  constructor(public item1: T1, public item2: T2) {
  }
}

// Interfaces
interface Pair<T> {
  item1: T;
  item2: T;
}


// And functions
let pairToTuple = function <T>(p: Pair<T>) {
  return new Tuple(p.item1, p.item2);
};

let tuple = pairToTuple({ item1: "hello", item2: "world" });
// console.log(tuple);


// Including references to a definition file:
/// <reference path="jquery.d.ts" />

// Template Strings (strings that use backticks)
// String Interpolation with Template Strings
let namee = 'Tyrone';
let greeting = `Hi ${namee}, how are you?`
// Multiline Strings with Template Strings
let multiline = `This is an example
of a multiline string`;

// READONLY: New Feature in TypeScript 3.1
interface Person2 {
  readonly name: string;
  readonly age: number;
}

var per1: Person2 = { name: "Tyrone", age: 42 };
// per1.age = 25; // Error, p1.age is read-only

var per2 = { name: "John", age: 60 };
var per3: Person2 = per2; // Ok, read-only alias for p2
// per3.age = 35; // Error, p3.age is read-only
per2.age = 45; // Ok, but also changes p3.age because of aliasing




class Car {
  readonly make: string;
  readonly model: string;
  readonly year = 2018;

  constructor() {
    this.make = "Unknown Make"; // Assignment permitted in constructor
    this.model = "Unknown Model"; // Assignment permitted in constructor
  }
}

let numbers: Array<number> = [0, 1, 2, 3, 4];
let moreNumbers: ReadonlyArray<number> = numbers;
// moreNumbers[5] = 5; // Error, elements are read-only
// moreNumbers.push(5); // Error, no push method (because it mutates array)
// moreNumbers.length = 3; // Error, length is read-only
// numbers = moreNumbers; // Error, mutating methods are missing


// Tagged Union Types for modelling state that can be in one of many shapes
type State = 
  | { type: "loading" }
  | { type: "success", value: number }
  | { type: "error", message: string };

  //declare is used to tell the compiler "this thing (usually a variable) exists already, 
  // and therefore can be referenced by other code, also there is no need to compile this statement into any JavaScript". 
declare const state: State; 
// if (state.type === "success") {
//   console.log(state.value);
// } else if (state.type === "error") {
//   console.error(state.message);
// }
// console.log(state);

// Template Literal Types
// Use to create complex string types
type OrderSize = "regular" | "large";
type OrderItem = "Espresso" | "Cappuccino";
type Order = `A ${OrderSize} ${OrderItem}`;

let order1: Order = "A regular Cappuccino";
let order2: Order = "A large Espresso";
// let order3: Order = "A small Espresso"; // Error
// console.log(order1, order2, order3);






