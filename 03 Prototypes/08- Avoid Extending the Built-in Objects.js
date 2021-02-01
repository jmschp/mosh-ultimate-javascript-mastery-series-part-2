// 08- Avoid Extending the Built-in Objects

/*
Although is quite simply to modify the prototype of an object we should avoid modifying built-in objects
*/

Array.prototype.shuffle = function() { // We add shuffle method to the Array built-in object.
  console.log('shuffled array');
}

const myArray = [1, 2, 3];
myArray.shuffle(); // We can define an array and call the shuffle method

/*
Although this works, we should not modify the built-in object for a number of reasons, for example:
  We could be using a library, and in that library someone has also extended the Array prototype, and added a shuffle method, but with a different implementation
  JavaScript developers could add the shuffle method in future version

We should not override, neither add or remove new method or properties from the built-in objects.
Modifying the built-in object might create bugs.
*/
