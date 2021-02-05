// 06- Private Members Using WeakMaps

// The WeakMap object is a collection of key/value pairs in which the keys are objects only and the values can be arbitrary values.
// The object references in the keys are held weakly, meaning that they are a target of garbage collection (GC) if there is no other reference to the object anymore.

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    // We call the set method in _radius, as a first argument we have to pass an object, so we pass "this" as a reference to the object that will be created by the Circle class.
    // Technically we can access this private property, if we can access the private property, We can hide the _radius in a module and only export the Circle class.
    _radius.set(this, radius);
    _move.set(this, () => {
      // Creating a private method.
      // If we use a arrow function "this" will reference the instance of the object. Because arrow function use the this value of their containing function. Here the constructor.
      // If we use a function declaration "this" will reference the global object. And because we are in a Class will return undefined.
      console.log("move", this);
    });
  }

  draw() {
    const radius = _radius.get(this); // We can use this syntax to access private properties within the class body.
    _move.get(this)(); // With the same syntax we can access the private method.
    console.log(`draw radius: ${radius}`);
  }
}

const myCircle = new Circle(1);
myCircle.draw();

// Instead of using one WeakMap to each property or method. We can use the same as WeakMap to all private properties and methods.
const privateProps = new WeakMap();

class AnotherCircle {
  constructor(radius) {
    privateProps.set(this, {
      radius: radius,
      move: () => {
        console.log("move", this);
      },
    });
  }
  draw() {
    const radius = privateProps.get(this.radius); // We can use this syntax to access private properties within the class body.
    _move.get(this.move()); // With the same syntax we can access the private method.
    console.log(`draw radius: ${radius}`);
  }
}
