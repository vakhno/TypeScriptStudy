// Tuple is using for specific type order and quantity order (you cant add or remove)
var User;
User = ['Tom', 22, true];
var newUser = [22, true, 'Tom'];
// but you should be careful, because you can use push, pop, shift, unshift methods to tuple
newUser.push('Bob');
console.log(newUser);
