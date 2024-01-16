// arguments should be type-checked, if argument doesnt have an type then it will be initialize as any, but that a bad practice
// function with number type arg
function addTwoNumber(num: number) {
	return num + 2;
}
addTwoNumber(6);

// function with string type arg
function getUpper(str: string) {
	return str.toUpperCase();
}
getUpper('hello');

// function with several arguments
function signUpUser(name: string, age: number, isPaid: boolean) {}

// also we can pass default values to args
function signUpUserWithDefaultValues(
	name: string = 'Tom',
	age: number = 22,
	isPaid: boolean = false,
) {}

// we can use types not for args only, but also we can set type and for functions
// so addTwoNumberWithType should return only number
function addTwoNumberWithType(num: number): number {
	return num + 2;
	// will be an err cause addTwoNumberWithType will return not a number
	// return 'not a number'
}
addTwoNumberWithType(6);

// if function doesnt need to return anythig than we should use void type for function
function voidFunction(name: string): void {
	console.log(`Hello ${name}`);
}
voidFunction('Tom');

// if function throws an exception or terminates execution of the program its type should never
function neverFunction(): never {
	throw new Error('Error here!');
}

// if we want to pass args as object and initialize return type for funciton
function returnObjectFunction({ name, age }: { name: string; age: number }): {
	name: string;
	age: number;
} {
	return { name: name, age: age };
}

returnObjectFunction({ name: 'Tom', age: 22 });

// we can simplify it by using type variable
type User = {
	name: string;
	age: number;
};
function returnObjectFunctionWithType({ name, age }: User): User {
	return { name: name, age: age };
}

returnObjectFunction({ name: 'Tom', age: 22 });

export {};
