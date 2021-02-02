// 08 - Mixin

/*
To create mixin in JavaScript we can use the Object.assign() method
The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

Syntax
  Object.assign(target, ...sources)

Parameters
  target  ---> The target object — what to apply the sources’ properties to, which is returned after it is modified.
  sources ---> The source object(s) — objects containing the properties you want to apply.

Return value
  The target object.
*/

// We can define the features as objects:
const canEat = {
  eat() {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk() {
    console.log("walking");
  },
};

const canSwim = {
  swim() {
    console.log("swimming");
  },
};

const myObject = Object.assign({}, canWalk, canEat); // Using the Object.assign() we can create a new object and add to it other objects.
console.log(myObject);

function Person(name) {
  this.name = name;
}

// Object.assign(Person.prototype, canWalk, canEat); // Using the Object.assign() we add method the the Person prototype
mixin(Person.prototype, canWalk, canEat);

const person = new Person("Miguel");
console.log(person);
/*
Person {name: "Miguel"}
  name: "Miguel"
  __proto__:
    eat: ƒ eat()
    walk: ƒ walk()
    constructor: ƒ Person(name)
    __proto__: Object
*/

function Goldfish() {}
// Object.assign(Goldfish.prototype, canSwim, canEat);
mixin(Goldfish.prototype, canSwim, canEat);

const goldfish = new Goldfish();
console.log(goldfish);
/*
Goldfish {}
  __proto__:
    eat: ƒ eat()
    swim: ƒ swim()
    constructor: ƒ Goldfish()
    __proto__: Object
*/

// To improve readability and make the code more DRY we can we can encapsulate the Object.assign(target, ...source); in a function
function mixin(target, ...source) {
  Object.assign(target, ...source);
}
