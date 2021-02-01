// 07- Iterating Instance and Prototype Members

// We have the Circle Constructor Function with 2 instance members
// 1 - Radius property
// 2 - Move method

function Circle(radius) {
  this.radius = radius; // Instance members

  this.move = function () {
    console.log("move");
  };
}

// We add the draw() method as a Prototype member
Circle.prototype.draw = function () {
  console.log("draw");
};

const c1 = new Circle(1);

// With Object.keys() method we can iterate over the instance members
console.log(Object.keys(c1)); // [ 'radius', 'move' ]

// With the for...in loop we can iterate over all members, both Instance Members and Prototype Members
for (let key in c1) console.log(key);
// It will log:
// radius
// move
// draw

// In JavaScript the word Own is also used instead of Instance
console.log(c1.hasOwnProperty('move'));
console.log(c1.hasOwnProperty("draw"));
