// let a=true;
// setTimeout(() => {
//     a=false;
// }, 2000);

// while(a){
//     console.log(a);  // this code will run on Call Stack of JS Engine. This loop will run infinite times as event loop won't get clear Call Stack at any time.
// }

/////////////

// let x=0;
// let id = setInterval(() => {
//    console.log(x++);  // output till 8
// }, 200);

// setTimeout( () =>{
//     clearInterval(id);
// }, 2000);

/////////////

// var cnt=0;
// function sayHello () {
//     cnt++;
//     console.log(cnt);
//     if(cnt > 5){
//         clearInterval(id);
//     }
//     console.log("Hello");
// }
// // var id = setInterval(sayHello, 1000);  // after every 1 sec sayHello() gets executed. Total of 6 times Hello will be printed.
// var id = setInterval(sayHello, 0);   // after every 0 sec sayHello() gets executed => it means all get printed simultaneously on console. Total of 6 times Hello will be printed.
// console.log("Hi buddy");  // this code will execute first as this will get into callstack queue first. Then sayHello() 6 times.

////////////

// var id = setInterval(()=> {
//     console.log("Hi");
// }, 0);

// clearInterval(id);  // no output.

////////////

// setTimeout(()=>console.log("Hello1"), 1000);
// setTimeout(()=>console.log("Hello2"), 1000);   // both will print at the same time.


////////////

// setTimeout(()=>console.log("Hello3"), 1000);
// setTimeout(()=>console.log("Hello4"), 0);
// console.log("Hi");  // first Hi will output then Hello4 but both at the same time. Finally, Hello3 will print.

////////////

// setTimeout(()=>console.log("Hello1"), 1000);
// setTimeout(()=>console.log("Hello2"), 1000);
// setTimeout(()=>console.log("Hello3"), 1000);
// setTimeout(()=>console.log("Hello4"), 0);
// console.log("Hi");  // first Hi will output then Hello4 but both at the same time. Then, Hello1 then Hello2 then Hello3 will print but all at the same time.
                       // bcoz js works in top to bottom fashion;

////////////

// function hoist(value){
//     if(value === 'hi'){
//         var action = "hello";  // var is hoisted.
//     }
//     else {
//         action = "night";
//     }

//     return action;
// }
// var response = hoist('hi');
// console.log(response);   // will give correct output as "hello" bcoz var is hoisted.

function hoist1(value){
    if(value === 'hi'){
        var action = "hello";  // cosnt is not hoisted.
    }
    else {
        action = "night";  // by default it is 'var' in nature. it changed to 'const', then will throw error as const is not hoisted.
    }

    return action;
}
var response = hoist1('hi');
console.log(response);  // will give ERROR as const OR let are not hoisted.

// var is hoisted
// const, let are not hoisted
// const, let are scoped within the blocks they are in

///////////