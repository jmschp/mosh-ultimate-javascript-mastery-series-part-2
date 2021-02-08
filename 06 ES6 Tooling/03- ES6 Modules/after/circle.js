/*
To export module features we can use two approaches, with the export statement
  1 - Place it in front of any items you want exported out of the module
  2 - Use a single export statement at the end of your module file, followed by a comma-separated list of the features you want to export wrapped in curly braces.
*/

const _radius = new WeakMap();

export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radius " + _radius.get(this));
  }
}

// export { Circle, AnotherClass, comeOtherFunction, aVariable };
