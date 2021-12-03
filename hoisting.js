// getName(); // Namaste JS as output
// console.log(x);  // undefined. Bcoz of hoisting, error is not popped out. Change var to const/let => error will occur.
// console.log(fun);  // undefined as arrow function also acts as variable.
                   // if var fun is changed to const/let fun => error will pop out.
// console.log(getName); // print entire function body

var x=7;
function getName() {
    console.log('Namaste JS');
}

var fun = getName = () => {
    console.log('Namaste JS');
}

// getName();  // Namaste JS as output
// console.log(x); // 7
// console.log(fun);  // print entire function body
console.log(fun()) // Namaste JS as output then undefined because of console.log;
fun(); // Namaste JS as output
// console.log(getName); // print entire function body
