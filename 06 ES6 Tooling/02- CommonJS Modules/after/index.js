// We use the require() function for to import.
// This require() function is part of the CommonJs format.

const Circle = require("./circle"); // Pass a relative pass to require function
// When we use require() we get at is returned by this module.
// module.export represent the object that is exported by this module.

// If we use the syntax module.exports.Circle = Circle; we can use the following expression to get the Circle class
// const Circle = require("./circle").Circle;

const c = new Circle(10);
c.draw();
