// arguments should be type-checked, if argument doesnt have an type then it will be initialize as any, but that a bad practice
// function with number type arg
function addTwoNumber(num) {
    return num + 2;
}
addTwoNumber(6);
// function with string type arg
function getUpper(str) {
    return str.toUpperCase();
}
getUpper('hello');
// function with several arguments
function signUpUser(name, age, isPaid) { }
// also we can pass default values to args
function signUpUserWithDefaultValues(name, age, isPaid) {
    if (name === void 0) { name = 'Tom'; }
    if (age === void 0) { age = 22; }
    if (isPaid === void 0) { isPaid = false; }
}
// we can use types not for args only, but also we can set type and for functions
// so addTwoNumberWithType should return only number
function addTwoNumberWithType(num) {
    return num + 2;
    // will be an err cause addTwoNumberWithType will return not a number
    // return 'not a number'
}
addTwoNumberWithType(6);
// if function doesnt need to return anythig than we should use void type for function
function voidFunction(name) {
    console.log("Hello ".concat(name));
}
voidFunction('Tom');
// if function throws an exception or terminates execution of the program its type should never
function neverFunction() {
    throw new Error('Error here!');
}
// if we want to pass args as object and initialize return type for funciton
function returnObjectFunction(_a) {
    var name = _a.name, age = _a.age;
    return { name: name, age: age };
}
returnObjectFunction({ name: 'Tom', age: 22 });
function returnObjectFunctionWithType(_a) {
    var name = _a.name, age = _a.age;
    return { name: name, age: age };
}
returnObjectFunction({ name: 'Tom', age: 22 });
