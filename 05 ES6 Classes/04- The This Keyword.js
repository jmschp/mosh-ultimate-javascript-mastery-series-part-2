// 'use strict';

// 04- The This Keyword

/*
Binding this with prototype and static methods
When a static or prototype method is called without a value for this, such as by assigning the method to a variable and then calling it, the this value will be undefined inside the method.
This behavior will be the same even if the "use strict" directive isn't present, because code within the class body's syntactic boundary is always executed in strict mode.

On the other hand using function-based syntax in non–strict mode, then this method calls are automatically bound to the initial this value, 
which by default is the global object (global in node.js and the window in browser).
In strict mode, autobinding will not happen; the value of this remains as passed.
*/

function CircleFunction() {
  this.draw = function () {
    console.log(this); // This will point to the object created by the function
  };
}

const circleFunc = new CircleFunction();

// Method call ---> We are calling a method on an object.
circleFunc.draw(); // Here "this" is pointing to the object circleFunc
/*
CircleFunction {draw: ƒ}
  draw: ƒ ()
  __proto__:
    constructor: ƒ CircleFunction()
    __proto__: Object
*/

console.log(circleFunc.draw);
/*
It will return the function
ƒ () {
    console.log(this);
  }
*/

const drawFunc = circleFunc.draw; // When we assign the draw function to a variable, without calling the functions, and only reference it.

// Function call ---> We are calling draw() as a standalone function that is not part of an object.
drawFunc();
// Here "this" is pointing to the glocal object. It returns the global object:
// Window {window: Window, self: Window, document: document, name: "", location: Location, …}
// If we use strict mode, if will return ---> undefined

class CircleClass {
  draw() {
    console.log(this);
  }
}

const circleClass = new CircleClass();
const drawClass = circleClass.draw;
drawClass();
// Because the body of the class is always executed in strict mode.
// Here it will return undefined, here it will return undefined even if we do not explicitly enable the strict mode.
// This will prevent use from modifying the global object.
