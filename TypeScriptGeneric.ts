// generic mean that we can pass array with any type and its will not break down  nothing
function getSecond<T>(array: T[]): T {
	return array[1];
}

let arr1 = [1, 2, 3, 4];
let arr2 = ['a', 'b', 'c', 'd'];

getSecond(arr1);
getSecond(arr2);

let input = document.querySelector<HTMLInputElement>('.input');
// we found elemnt with class 'input', but we realy dont that that input, becasue this class can handle event common div, to resolve this problem just use 'HTMLInputElement'
let inputValue = input?.value;

const map = new Map<string, number>([['', 0]]);
map.set('a', 1);

type APIResponse<Data> = {
	data: Data;
	isErrpr: boolean;
};
const response: APIResponse<{ name: string; age: number }> = {
	data: {
		name: 'Tom',
		age: 22,
	},
	isErrpr: false,
};

// we can improve it and create type for generic

type APIResponse2<Data> = {
	data: Data;
	isErrpr: boolean;
};
type userResponse = APIResponse<{ name: string; age: number }>;
type blogReponse = APIResponse<{ title: string }>;
type statusResponse = APIResponse<{ status: number }>;

const response2: userResponse = {
	data: {
		name: 'Tom',
		age: 22,
	},
	isErrpr: false,
};

const response3: blogReponse = {
	data: {
		title: 'Title 1',
	},
	isErrpr: false,
};

const response4: statusResponse = {
	data: {
		status: 200,
	},
	isErrpr: false,
};

// but what if we sure that our reponse data always will be object? we should just extend object

type APIResponse3<Data extends object> = {
	data: Data;
	isErrpr: boolean;
};

const response5: APIResponse3<{ name: string; age: number }> = {
	data: {
		name: 'Tom',
		age: 22,
	},
	isErrpr: false,
};
