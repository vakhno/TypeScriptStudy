// our variable can contan number or string
let score: number | string = 33;
score = 22;
score = '11';

type User = {
	name: string;
	age: number;
};

type Admin = {
	userName: string;
	age: number;
};

let testUser: User | Admin = { name: 'Tom', age: 22 };
testUser = { userName: 'Tom', age: 22 };

// but should be carefull if funciton argument can take string or number value we should check his type to overcome errors
function getId(id: string | number) {
	if (typeof id === 'number') {
		console.log('ID:', id);
	} else {
		console.log('ID:', id.toUpperCase());
	}
}

getId(123456);
getId('qwerty');

// union with array
// can contain pnly numbers
const data: number[] = [1, 2, 3];
// can contain only strings
const data2: string[] = ['1', '2', '3'];
// can contain numbers and strings
const data3: (string | number)[] = [1, '2', 3, '4'];

// also union can be e speciifc value, thats mean that name var can be ONLY Tom or Jack or Harry
let name: 'Tom' | 'Jack' | 'Harry';
name = 'Tom';
// error
// name = 'Tim'
export {};
