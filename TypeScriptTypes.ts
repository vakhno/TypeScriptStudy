/*
Types:
-Number
-String
-Boolean
-Null
-Undefined
-Void
-Object
-Array
-Tuples
-Any
-Never
-unknown
*/

// string var
let stringVar: string = 'Hello User';
// error: cause of 'Type 'number' is not assignable to type 'string'
//stringVar = 6;
// number var
let numberVar: number = 666;
let numberVar2: number = 666.6;
// can not use string methods to number var 'Property 'toLowerCase' does not exist on type 'number'.'
// numberVar.toLowerCase();
// boolean var
let booleanVar: boolean = true;
/*
TypeScript probably remember first var assign, so, there is no need to write ':string' or ':number'
TypeScript is more smart then you think
*/
// here we initilize our var without ':number' and TS automatically assign ':number' to it
let numberVar3 = 111.1;
// no error cause 'let numberVar3: number' (':number' was added automatically)
numberVar3.toFixed();

// any var (BETTER TO AVOID IT, BECAUSE ANY ISNT TYPE-CHECKED)
// any variables using when use doesnt know wat exactly type of the varialbe should contain
// here any type will be automatically assign to anyVar
let anyVar;

const greetingFunction = () => {
	return 'Hello User!';
};

anyVar = greetingFunction();
// better way to use it like this
let notAnyBarAnymore: string;

notAnyBarAnymore = greetingFunction();

export {};
