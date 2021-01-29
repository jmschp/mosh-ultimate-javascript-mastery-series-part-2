// 08- Adding or Removing Properties

// Objects in JavaScript are dynamic, that means, that after we create them we can add extra properties or even delete properties.
// For example if we are working with a user object.
// A client, that can be a web or mobile application, is going to send a user object to the server.
// On the server we can add or remove properties from the user object, like for example a token.

function Circle(radius) {
  this.radius = radius;
  this.draw = function draw() {
    console.log("Draw");
  };
}

const circle = new Circle(10);

circle.location = { x: 1, y: 1 }; // In here we add the location property to the circle object.
console.log(circle);
circle["location"] = { x: 3, y: 3 }; // The bracket notation is a different syntax to achieve the same result.
console.log(circle);

// The bracket notation is useful in situation we want to access that property dynamically.
// Or if the property as special characters like spaces or dashes -.
const propertyName = "location";
console.log(circle[propertyName]);


// We can also delete properties. For example if we want to send the user object to the client, but properties like credit card info must not be sent.
delete circle.location // We can use the dot notation or the bracket notation.
console.log(circle);