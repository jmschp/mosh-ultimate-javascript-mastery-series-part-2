// 03- Static Methods

/*
Static methods and properties
The static keyword defines a static method or property for a class.
Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance.
Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

*/

class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {
      console.log("move");
    };
  }
  // Instance method
  draw() {
    console.log("draw");
  }

  // Static method
  // In this example we have a Static Method, that will return a new circle, from a JSON string.
  static parse(jsonString) {
    const radius = JSON.parse(jsonString).radius;
    return new Circle(radius);
  }
}

const myCircle = new Circle(1);
myCircle.draw();

const anotherCircle = Circle.parse('{ "radius" : 1 }'); // Width the Static method parse() we can initialize a new circle object 
anotherCircle.draw();
