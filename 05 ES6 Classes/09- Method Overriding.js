// 09- Method Overriding

/*
To override a method from the Parent Class in a Child class, we must implement the method with the same name in the Child class body
It is possible to call super in the Child class method, to also reuse the same implementation as in the Parent class.
*/

class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log("move");
  }
  flip() {
    console.log("flip shape");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log("draw");
  }

  move() { // Here we override the move method from the Parent Shape Class 
    super.move(); // Because we call super, the implementation of the Parent class is also used.
    console.log("move circle");
  }

  flip() {
    // Here we override the flip method from the Parent Shape Class, without using its implementation.
    console.log("flip circle");
  }
}

const myCircle = new Circle("red", 10);

myCircle.move();

myCircle.flip();
