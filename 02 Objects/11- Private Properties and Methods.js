// 11- Private Properties and Methods

// To implement Abstraction in the object we remove the "this" keyword and replace it for a variable
function Circle(radius) {
  let color = "red"; // Because were we are using a variable, instead of the "this" keyword, color it is not a property from this object, so it is not accessible from the outside. It is only a variable with local scope to this function.
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 }; 
  let computeOptimumLocation = (factor) => { // Using this technic we can convert this method to a private method.
    console.log("this is the best location");
  };

  this.draw = function draw() {
    computeOptimumLocation(0.1); // We define the method and call it in the draw method. THIS MAYBE NOT A GOOD PRACTICE
    console.log("Draw");
  };
}
const myCircle = new Circle(10);

// In contrast to scope we have clojure. It determines what variables will be accessible to a inner function.
// The Draw function will be able to access all the local variable defined in it, and all the local variable defined in its parent function.
// The defaultLocation and computeOptimumLocation are in the scope of the Circle function and the the clojure fo the draw function.