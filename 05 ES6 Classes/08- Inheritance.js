// 08 - Inheritance

/*
The extends keyword is used in class declarations or class expressions to create a class as a child of another class.
If there is a constructor present in the subclass, it needs to first call super() before using "this".

One may also extend traditional function-based "classes"
*/

class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log("move");
  }
}

class Circle extends Shape { // We use the "extends" keyword
  constructor(color, radius) {
    super(color); // We first need to call the super() so it call the constructor() of the Parent Class 
    this.radius = radius;
  }

  draw() {
    console.log("draw");
  }
}

const myCircle = new Circle("red", 10);
console.log(myCircle);

myCircle.move(); // We can call the Parent Class method in the Child Class

myCircle.draw();