// 02- Resetting the Constructor

function Shape() {}

// Define the duplicate() method in the Shape prototype
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

// Define the draw() method in the Circle prototype
Circle.prototype.draw = function () {
  console.log("draw circle");
};

function Square(size) {
  this.size = size;
}

// Define the draw() method in the Square prototype
Square.prototype.square = function () {
  console.log("draw square");
};

// Here the Object.create(Shape.prototype) returns a object that inherits from shapeBase (Shape.prototype).
// Then we assign it to the prototype of Circle and Square.
Circle.prototype = Object.create(Shape.prototype);
Square.prototype = Object.create(Shape.prototype);

// If we don't reset the constructor the constructor for the Circle and Square will be the Shape constructor.
console.log(Circle.prototype.constructor); // It returns the Shape constructor function
/*
ƒ Shape() {
}
*/

// So if we try to create a new object with:
const myObject = new Circle.prototype.constructor(); // We will get a shape object not a Circle object
console.log(myObject);

// In here we reset the constructor for the Circle and Square.
Circle.prototype.constructor = Circle;
Square.prototype.constructor = Square;
// As a best practice if we reset the Prototype, we should reset the constructor as well.

console.log(Circle.prototype.constructor); // Now it returns the Circle constructor function.
/*
ƒ Circle(radius) {
  this.radius = radius;
}
*/

const myCircle = new Circle(1);
myCircle.duplicate();

const mySquare = new Square(1);
mySquare.duplicate();
