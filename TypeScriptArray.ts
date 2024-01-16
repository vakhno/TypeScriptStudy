// array of strings (array value only string)
const arrayOfStrings: string[] = [];
arrayOfStrings.push('a');
// error cause we cant add number to string array
// arrayOfStrings.push(1);
// array of numbers (array value only number)
const arrayOfNumber: number[] = [];
arrayOfNumber.push(1);
// error cause we cant add string to number array
// arrayOfNumber.push('a');

type User = {
	name: string;
	age: number;
};
// array of Users (array value only User)
const arrayOfUsers: User[] = [];
// array of array (array will contain array of numbers its a good way for matrix)
const arrayOfArray: number[][] = [];
arrayOfArray.push([128, 256, 512]);

// also we can initialize a ready only array
const readyOnlyArray: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// error cause ready only array can be changed
// readyOnlyArray.push(2);

export {};
