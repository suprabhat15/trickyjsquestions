// /////////// undeclared

// const b = foo+1; // error as foo is not defined


// ////////// undefined

/*
 let foo;  // variable declared but no defined value(not initialized)
 let bar={};   // object/array exists but not at that index/key
 let baz=['a','b','c'];  
 const q = () => {      // function exists but does not return anything
    // don't return anything
 };

 console.log(foo, bar.name, baz[4], q());  // all print undefined

 const a;   // missing initializer in const declaration
*/


/*
let foo;
console.log(typeof foo); // undefined 
console.log(typeof bar); // undeclared but this line returns undefined as output

// preferred
console.log(foo === undefined);  // true boolean

const baz='undefined';
console.log(baz === undefined); // false boolean
*/

///////////  null
// const x= null;
// console.log(x); // prints null

/*
 null has a value which is 'null'
 null is a 'nothing' value
 not zero, not an empty string/object/array
*/

// const foo=null;
// console.log(typeof foo);  // object

// preferred
// console.log(foo === null);  // true boolean



// == and === 
let foo;
const bar = null;

console.log(typeof foo);  // undefined
console.log(typeof bar);  // object
console.log(foo == bar);  // true as == checks for equality
console.log(foo === bar); // false as === checks for equality and type