// 01- ES6 Classes

/*
In modern JavaScript ES6 (ES2015) we have a new way to create object and implement inheritance, using classes.
Classes in JavaScript are not like classes in other Object Orientated Languages, like Java or Ruby.
They are essential syntactic sugar over Prototypical Inheritance.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components:
  class expressions
  class declarations.
*/

// Using the old syntax ---> Constructor Function
function CircleOld(radius) {
  // Defining the radius property as an Instance member
  this.radius = radius;
  // Defining the move method as an Instance member
  this.move = function () {
    console.log("move");
  };
}

CircleOld.prototype.draw = function () {
  // Defining the draw method as an Prototype member
  console.log("draw");
};

// Using the new syntax ---> Class
class CircleNew {
  // Body of the class
  // The constructor method is used to initialize objects.
  constructor(radius) {
    // Defining the radius property, in the Constructor Body, as an Instance member.
    this.radius = radius;
    // Defining the move method, in the Constructor Body, as an Instance member.
    this.move = function () {
      console.log("move");
    };
  }

  // Defining the draw method, in the Class Body, as an Prototype member.
  draw() {
    console.log("draw");
  }
}

const oldCircle = new CircleOld(1); // Instantiating a new circle with the Constructor function
/*
CircleOld {radius: 1, move: ƒ}
  move: ƒ ()
  radius: 1
  __proto__:
    draw: ƒ ()
    constructor: ƒ CircleOld(radius)
    __proto__: Object
*/

const newCircle = new CircleNew(1); // Instantiating a new circle with the Class syntax
/*
CircleNew {radius: 1, move: ƒ}
  move: ƒ ()
  radius: 1
  __proto__:
    constructor: class CircleNew
    draw: ƒ draw()
    __proto__: Object
*/

console.log(typeof CircleNew); // 'function'
