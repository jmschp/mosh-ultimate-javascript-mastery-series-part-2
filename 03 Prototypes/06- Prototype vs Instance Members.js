// 06- Prototype vs Instance Members

function Circle(radius) {
  this.radius = radius;

  this.draw = () => {
    console.log("draw");
  };
}

const c1 = new Circle(1);
console.log(c1);
/*
Circle {radius: 1, draw: ƒ}
draw: () => { console.log("draw"); }
radius: 1
__proto__: Object
*/
const c2 = new Circle(2);
console.log(c2);
/*
Circle {radius: 2, draw: ƒ}
draw: () => { console.log("draw"); }
radius: 2
__proto__: Object

In this implantation we will have the draw() method duplicated in each circle.
If we have a thousand circles in memory, we would have a thousand copies of the draw() method.T his could take a lot of memory.
*/

// We can take the draw method out of the circle object and put it in the prototype.
// We will have a single instance in memory of this prototype.
// This way will only have a single instance of the draw method.
function CircleInheritance(radius) {
  this.radius = radius; // Instance members

  this.move = function () {
    console.log("move");
    this.bigger(); // Here we call a Prototype member in an instance member.
  };
}

// Prototype members
// This way we move the draw method to the prototype
CircleInheritance.prototype.draw = function () {
  this.move(); // We can reference an Instance method in an prototype method and vice versa
  console.log("draw");
};

CircleInheritance.prototype.bigger = function () {
  console.log("bigger circle");
};

const c3 = new CircleInheritance(3);
console.log(c3);
/*
CircleInheritance {radius: undefined}
radius: undefined
__proto__: Object
*/

const c4 = new CircleInheritance(4);
console.log(c4);
/*
CircleInheritance {radius: undefined}
radius: undefined
__proto__: Object
*/

// We can override a method from objectBase, in the prototype of our circle object.
CircleInheritance.prototype.toString = function () {
  return "This circle has a radius of " + this.radius;
};

console.log(c3.toString());
console.log(c4.toString());