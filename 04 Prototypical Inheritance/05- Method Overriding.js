// 05- Method Overriding

/*
In a situation where a method defined in the Parent object, may not be ideal for the Child object. We can override that method.
Let's imagine that not all shapes use the same duplicate method.
For example the Circle needs a different implementation of the duplicate method.
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

// Here we override the duplicate method from Shape
Circle.prototype.duplicate = function () {
  // In case we want to call the duplicate method in the Parent object as well, we can use this syntax.
  Shape.prototype.duplicate();

  // In case we are using "this" keyword in the implementation of the method i the Parent object, we must use the following syntax.
  Shape.prototype.duplicate.call(this);

  console.log("duplicate circle");
};

const myCircle = new Circle(1, "blue");
console.log(myCircle);
myCircle.duplicate(); // Now when we call duplicate(), it is the duplicate() method in Circle that is called.