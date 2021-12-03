const users = [
    {firstName: 'Suprabhat', lastName: 'Kumar', age: 50},
    {firstName: 'Supra', lastName: 'Kr', age: 30},
    {firstName: 'Avinash', lastName: 'K', age: 20}
];

const ans = users.map(item => {
    return item.firstName + ' ' + item.lastName;
});

console.log(ans);

const res = users.filter(item => item.age < 40);
console.log(res);


// chaining of filter, map
const output = users.filter(item => {    
    return item.age<40;
    }).map(x => {
     return x.firstName;
    });

console.log(output);

// above result can be obtained using reduce.
const result = users.reduce((acc, current) => {
    if(current.age <40) acc.push(current.firstName);
    return acc;
}, []);

console.log(result);