// 05- Private Members Using Symbols

// One of the core principles of OOP is abstraction, hiding the details, and showing only the essential.
// To implement abstraction we hide certain properties and methods.
// We make them private.

// In the following example Properties and Methods from the circle class as public.
class CirclePublic {
  constructor(radius) {
    this.radius = radius;
  }
  draw() {
    console.log("draw");
  }
}

const myPublicCircle = new CirclePublic(1);
// We can access this properties an methods form the outside.
console.log(myPublicCircle.radius);
myPublicCircle.draw();

/*
In this example we will use private Methods and Properties.
There are 3 approaches to this
  1 - Use an underscore "this._radius", this is just a naming convention that some developers use, but it does not actually make the methods or properties private. DO NOT USE
  2 - Using Symbols
  3 - Using WeakMaps
  4 - Using # names ---> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
*/

console.log(Symbol() === Symbol()); // It returns false, because every time we call the Symbol() we get a new unique value.

const _radius = Symbol(); // We call the Symbol(); function to generate a Symbol, which is essential a unique identifier.
const _draw = Symbol();

class CirclePrivate {
  constructor(radius) {
    this[_radius] = radius; // To use the _radius Symbol as a property we use the bracket notation.
  }
  // In ES6 we can use the Computed Property Name feature to create a private method
  // We add brackets, the expression inside the brackets is evaluated, and the result will be use as the name of the method or property.
  [_draw]() {
    console.log("draw");
  }
}

const myPrivateCircle = new CirclePrivate(1);

console.log(myPrivateCircle._radius); // The radius property is private, so it returns undefined

// There is a hack around it
const circleProperties = Object.getOwnPropertySymbols(myPrivateCircle); // This will return an array of symbols
console.log(circleProperties); // [Symbol()]

// If we access the first item in the array and pass to it to the myPrivateCircle, using the bracket notation. It will return 1, the value of the property _radius.
console.log(myPrivateCircle[circleProperties[0]]);

// myPrivateCircle.draw(); // If we try to use the draw() methods it will raise an exception TypeError: myPrivateCircle.draw is not a function


