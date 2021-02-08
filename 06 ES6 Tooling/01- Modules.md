# 01- Modules

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

In real world applications our code is splitted into multiple files. We call each of this files a **Module**.

## Benefits of Modules

**Modularity** gives us a number of benefits.

1. Maintainability

   We can increase teh maintainability of our application, because our code is better organized.

2. Reuse

   We can reuse one or more of this modules in different parts of the application, or even in other applications.

3. Abstract

   We can abstract code. Hiding some of the complexity in a Module, and only expose the essentials.

   For example in the following code, if we can access the `const _radius = new WeakMap();` we can read the radius private property of the circle object. What we should do is place the `const _radius = new WeakMap();` and the `class Circle {}` in a different file, and then only expose the `class Circle {}` to the outside.

```javascript
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    const radius = _radius.get(this);
    console.log(`draw radius: ${radius}`);
  }
}

const circle = new Circle(10);
console.log(_radius.get(c)); // Returns the private radius property: 10
```

## History of modules

In ES5 there was no concept of modules, so different solutions emerged to solve this problem. The community of developers introduced new syntaxes to define modules, we refer fo this syntaxes as **Modules Formats**.

### Module Formats

1. AMD - Asynchronous Module Definition ---> Primarily used in Browser applications
2. CommonJS ---> Used in Node.js
3. UMD - Universal Module Definition ---> Can be used both in the Browser and Node.js
4. ES6 Modules ---> Since ES6 JavaScript natively supports a module format, used in Browsers.

From this list in the next lessons we are going to focus on two formats, **CommonJS**, because it is used in Node.js and **ES6 Modules**, its used in browsers.
