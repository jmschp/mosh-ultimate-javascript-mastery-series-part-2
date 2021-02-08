// Implementation Detail
const _radius = new WeakMap();

// Public Interface
class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

// The module keyword referes to the current module.
// This module as a property called exports, which is an object.
// And we can add one or more properties to this object.

// module.exports.Circle = Circle;
// module.exports.Square = Square; in case we had multiple class or functions or even variables we can add them as well.

module.exports = Circle; // Because in this case we are exporting a single object we can use this syntax.
