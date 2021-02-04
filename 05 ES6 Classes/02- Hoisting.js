/*
Hoisting is JavaScript's default behavior of moving declarations to the top.
The key difference between Function Declaration and Function Expression is that:
    Function declarations can be called before being declared
    Function expression can not, it's the same as using a variable.

The reason for this is when our JavaScript engine runs this code, it moves all function declarations to the top.
Its called Hoisting. The process of moving Function Declarations to the top of the file, and it is made automatically by the Javascript engine.

An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not.
You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:
*/

sayHello();

// Function declaration
function sayHello() {
  console.log("hello");
}

// Anonymous Function Expression
let sayGoodbye = function () {
  console.log("bye");
};

sayGoodbye();

// Class Declaration
class Circle {
  draw() {
    console.log("draw");
  }
}

const newCircle = new Circle();
newCircle.draw();

// Class Expressions
const Square = class {
  draw() {
    console.log("draw");
  }
};

const newSquare = new Square();
newSquare.draw();
