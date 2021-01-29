// 03- Multilevel Inheritance

// If we create a new array and inspect it we will se the following

let myArray = [];
/*
[]
    length: 0
    __proto__: Array(0)
    concat: ƒ concat()
    constructor: ƒ Array()
    copyWithin: ƒ copyWithin()
    entries: ƒ entries()
    every: ƒ every()
    fill: ƒ fill()
    filter: ƒ filter()
    find: ƒ find()
    findIndex: ƒ findIndex()
    flat: ƒ flat()
    flatMap: ƒ flatMap()
    forEach: ƒ forEach()
    includes: ƒ includes()
    indexOf: ƒ indexOf()
    join: ƒ join()
    keys: ƒ keys()
    lastIndexOf: ƒ lastIndexOf()
    length: 0
    map: ƒ map()
    pop: ƒ pop()
    push: ƒ push()
    reduce: ƒ reduce()
    reduceRight: ƒ reduceRight()
    reverse: ƒ reverse()
    shift: ƒ shift()
    slice: ƒ slice()
    some: ƒ some()
    sort: ƒ sort()
    splice: ƒ splice()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    unshift: ƒ unshift()
    values: ƒ values()
    Symbol(Symbol.iterator): ƒ values()
    Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
    __proto__:
        constructor: ƒ Object()
        hasOwnProperty: ƒ hasOwnProperty()
        isPrototypeOf: ƒ isPrototypeOf()
        propertyIsEnumerable: ƒ propertyIsEnumerable()
        toLocaleString: ƒ toLocaleString()
        toString: ƒ toString()
        valueOf: ƒ valueOf()
        __defineGetter__: ƒ __defineGetter__()
        __defineSetter__: ƒ __defineSetter__()
        __lookupGetter__: ƒ __lookupGetter__()
        __lookupSetter__: ƒ __lookupSetter__()
        get __proto__: ƒ __proto__()
        set __proto__: ƒ __proto__()

|---------|
| objBase |
|---------|
    |
    | 
    |
|---------|
|arrayBase|
|---------|
    |
    | 
    |
|---------|
| myArray |
|---------|

So we have myArray, that we created, and it derives from arrayBase and arrayBase derives from objectBase.
This is whats it's called multilevel inheritance.
*/


// The custom object created using the constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('draw');
    }
}

const myCircle = new Circle(10);

/*
Circle {radius: 10, draw: ƒ}
    draw: () => { console.log("draw"); }
    radius: 10
    __proto__:
        constructor: ƒ Circle(radius)
            arguments: null
            caller: null
            length: 1
            name: "Circle"
            prototype: {constructor: ƒ}
            __proto__: ƒ ()
            [[FunctionLocation]]: index.js:1
            [[Scopes]]: Scopes[2]
        __proto__:
            constructor: ƒ Object()
            hasOwnProperty: ƒ hasOwnProperty()
            isPrototypeOf: ƒ isPrototypeOf()
            propertyIsEnumerable: ƒ propertyIsEnumerable()
            toLocaleString: ƒ toLocaleString()
            toString: ƒ toString()
            valueOf: ƒ valueOf()
            __defineGetter__: ƒ __defineGetter__()
            __defineSetter__: ƒ __defineSetter__()
            __lookupGetter__: ƒ __lookupGetter__()
            __lookupSetter__: ƒ __lookupSetter__()
            get __proto__: ƒ __proto__()
            set __proto__: ƒ __proto__()

Every time we call the Circle constructor to create a new circle, this constructor will create anew circle and set it's prototype to circleBase.
Objects created by a given constructor will have the same prototype.
All circle objects created by the circle constructor will have the circleBase prototype.

|---------|
| objBase |
|---------|
    |
    | 
    |
|----------|
|circleBase|
|----------|
    |
    | 
    |
|---------|
|myCircle |
|---------|

*/