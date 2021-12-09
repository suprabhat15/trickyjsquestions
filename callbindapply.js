// https://www.youtube.com/watch?v=75W8UPQ5l7k

const name1 = {
    firstname: "Suprabhat",
    lastname: "Kumar",
}

const name2 = {
    firstname: "Supra",
    lastname: "Kumar",
}

// NEVER USE ARROW FUNCTIONS IN CALL, BIND. If printN is changed to arrow functions, undefined gets printed.

// const printName = function(hometown, state){
//     console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
// }


// printName.call(name1, "New Delhi", "Delhi");

// printName.apply(name2, ["New Delhi", "Delhi"]); // the only difference b/w call and apply is the array is passed in apply while in call
//                                                 // values are passed individually.

// let printDetails = printName.bind(name1, "New Delhi", "Delhi");  // bind is different from call in the sense that, call() gives output 
//                                                                 // immediately while bind() binds the function which can be called anytime. 
//                                                                 // bind() gives a copy of the function being binded.
//                                                                 // here name1 is binded to printName.
// printDetails();


// INTERVIEW QUESTION
// WRITE YOUR OWN BIND(). If browser doesn't have its own method, create your own.
// POLYFILL FOR BIND()

const name3 = {
    firstname: "Suprabhat",
    lastname: "Kumar",
}

const printN = function(state, location) {
    console.log(this.firstname + " " + this.lastname + " , " + state + " , " + location);
}

let output = printN.bind(name3, "New Delhi");
output("Delhi");

Function.prototype.mybind = function(...args){ // ... operator is must as args is an array.
    let obj = this,
    params = args.slice(1); // it will exclude 1st element and then return the entire array from 1st index till array.length
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);  // apply has to used here as params is an array.
    }
}

let out = printN.mybind(name3, "New Delhi");
out("Delhi"); // to execute "Delhi" as output, we have used args2 in line 51, 52.