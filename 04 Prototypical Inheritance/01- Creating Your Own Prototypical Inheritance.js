// 01- Creating Your Own Prototypical Inheritance

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#inheritance_with_the_prototype_chain
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

Lets imagine we have a Circle object with a duplicate() method.
And later we need a Square object that needs the exact same implementation of duplicate().
Instead of implementing the duplicate() method in both objects, we can have a Shape object with the duplicate() method.
And both the Circle and Square object will inherit from the Shape object.

To do this we use the Object.create() method
The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

Syntax
Object.create(proto, [propertiesObject])

Parameters
proto
The object which should be the prototype of the newly-created object.

propertiesObject - Optional

If specified and not undefined, an object whose enumerable own properties (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names.
These properties correspond to the second argument of Object.defineProperties().

Return value
A new object with the specified prototype object and properties.

Exceptions
The proto parameter has to be either

null or
an Object excluding primitive wrapper objects.
If proto is neither of these a TypeError is thrown.
*/

function Shape() {
  console.log("this is a shape");
}

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

const myCircle = new Circle(1);
myCircle.duplicate();

const mySquare = new Square(1);
mySquare.duplicate();
