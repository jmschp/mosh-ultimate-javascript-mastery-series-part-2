// 04- Intermediate Function Inheritance

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// We can create a function to reuse, for setting parent child relations.
// This way we have cleaner code.
// We use uppercase for the parameters, because it is expected they are constructor functions.
function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  this.radius = radius;
  Shape.call(this, color);
}

extend(Shape, Circle); // Now we can call extend() with the Shape and Circle constructor functions to establish the relationship.

Circle.prototype.draw = function () {
  console.log("draw circle");
};

function Square(size, color) {
  this.size = size;
  Shape.call(this, color);
}

extend(Shape, Square);

Square.prototype.square = function () {
  console.log("draw square");
};

const myCircle = new Circle(1, "blue");
console.log(myCircle);
myCircle.duplicate();
myCircle.draw();

const mySquare = new Square(1, "red");
console.log(mySquare);
