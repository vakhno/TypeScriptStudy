// Tuple is using for specific type order and quantity order (you cant add or remove)
let User: [string, number, boolean];
User = ['Tom', 22, true];
// error because type order is wrong
// User = [22, 'Tom', true];

// also we can create a type for tuple
type UserType = [number, boolean, string];
let newUser: UserType = [22, true, 'Tom'];
// but you should be careful, because you can use push, pop, shift, unshift methods to tuple
newUser.push('Bob');
// output will be: [ 22, true, 'Tom', 'Bob' ]
console.log(newUser);
