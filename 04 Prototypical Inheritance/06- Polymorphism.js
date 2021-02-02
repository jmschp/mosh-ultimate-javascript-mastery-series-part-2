// 06 - Polymorphism


/*
Polymorphism comes from the word Polymorph.

Poly: Many.
Morph: Change from one form to another.
So Polymorphism is the ability to take on multiple forms.

This is an extremely powerful technic in OOP

with the following code we have many implementation (or many forms) of the duplicate() method.
*/

function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  this.radius = radius;
  Shape.call(this, color);
}

extend(Shape, Circle);

Circle.prototype.draw = function () {
  console.log("draw circle");
};

Circle.prototype.duplicate = function () {
  console.log("duplicate circle");
};

function Square(size, color) {
  this.size = size;
  Shape.call(this, color);
}

extend(Shape, Square);

Square.prototype.draw = function () {
  console.log("draw Square");
};

Square.prototype.duplicate = function () {
  console.log("duplicate square");
};

const myShapes = [new Circle(1, "blue"), new Square(1, "red")];

// Depending on the type of the shape object, a different form, or a different implementation of the duplicate() method will be called.
for (let shape of myShapes) {
  shape.duplicate();
}

// So encapsulating variables and functions into objects, and use inheritance, allows us to execute many forms of a method.