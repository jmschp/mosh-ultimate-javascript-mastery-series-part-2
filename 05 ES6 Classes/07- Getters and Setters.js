// 07- Getters and Setters

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
    _move.set(this, () => {
      console.log("move", this);
    });
  }

  draw() {
    const radius = _radius.get(this);
    _move.get(this)();
    console.log(`draw radius: ${radius}`);
  }

  get radius() { // Define a getter for the radius
    return _radius.get(this);
  }

  set radius(radius) { // Define a setter for the radius
    if (radius <= 0) throw Error("invalid radius"); // we can add a validation to the input value.
    _radius.set(this, radius);
  }
}

const myCircle = new Circle(1);
console.log(myCircle.radius); // Here we read the radius property with the getter.

myCircle.radius = 10; // Here we set the radius property with the setter.

console.log(myCircle.radius); // Here we read again the radius property with the getter.
