// 02- Four Pillars of OOP

/*
4 Pillar
- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

Before Object Orientated Programming, there was Procedural Programming.
In Procedural Programming paradigm a program is divided into set of Function. We have data stored in a bunch of variables and Functions that operate in those variables.
In OOP we combine a group of functions and variables into a unit, this unit is called an Object.
The variables are called the properties and the functions methods.
*/

// Encapsulation

// Procedural Programming
// This is an implementation to calculate the wage of an employee. The variable that store the data and the function that operates in that data.
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

getWage(baseSalary, overtime, rate);

// Object Orientated Programming
// We encapsulate the properties and the function in a single object.
// In this way the functions does not have parameters.
// Because the variables and the function are related, they are part of one unit.
let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + (this.overtime + this.rate);
  },
};

console.log(employee.getWage());

/*
Abstraction
For example a TV as a remote, we simply press a button like change volume or chanel, and the magic happens. We don't care about what happens in the index.
All the complexity is hidden away.
We can apply the same technic in our Objects. We can hide some of the properties and methods from the outside, and this gives us some benefits:
    -Simpler interface. Will make the interface of those objects simpler. Using and understanding an object with less properties and methods it's easier,
    - Reduce the impact of change. We can change some methods or properties, and it will not impact the outside, because we do not have any code that talks to these private methods.
We should hide the details and complexity and show or expose only the essential.

*/

/*
Inheritance
Inheritance lets one object acquire the properties and methods of another object.
If we have properties and method that are common to several Objects, we can define a general Object and theses objects will inherit from the general Object
*/

/*
Polymorphism
Means we can override a method or property inherited from the parent object, so it perform a different action in the child object.
W might have a base prototype that is called Animal which defines makeNoise.
Then every type extending from that prototype can override to do their own custom work.
*/
// Let's set up an Animal and Dog example
function Animal(){}
function Dog(){}

Animal.prototype.makeNoise = function(){
	console.log("Base noise");
};

// Most animals we code up have 4. This can be overridden if needed
Animal.prototype.legs = 4;

Dog.prototype = new Animal();

Dog.prototype.makeNoise = function(){
	console.log("Woof woof");  
};

var animal = new Animal();
var dog = new Dog();

animal.makeNoise(); // Base noise
dog.makeNoise();    // Woof woof- this was overridden
dog.legs;           // 4! This was inherited

