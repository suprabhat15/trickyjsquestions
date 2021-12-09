// https://www.youtube.com/watch?v=75W8UPQ5l7k

const name1 = {
    firstname: "Suprabhat",
    lastname: "Kumar",
}

const name2 = {
    firstname: "Supra",
    lastname: "Kumar",
}

const printName = function(hometown, state){
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
}


// printName.call(name1, "New Delhi", "Delhi");

printName.apply(name2, ["New Delhi", "Delhi"]); // the only difference b/w call and apply is the array is passed in apply while in call
                                                // values are passed individually.

let printDetails = printName.bind(name1, "New Delhi", "Delhi");  // bind is different from call in the sense that, call() gives output 
                                                                // immediately while bind() binds the function which can be called anytime.
printDetails();