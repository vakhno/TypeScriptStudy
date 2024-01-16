// so thats a simple type
type UserData = {
	_id: string;
	name: string;
	age: number;
	isActive: boolean;
};

function setUser(user: UserData): UserData {
	return user;
}

// but what if we want to forbid to edit _id we can use readonly

type UserDataNonEditId = {
	readonly _id: string;
	name: string;
	age: number;
	isActive: boolean;
};

let userVar: UserDataNonEditId = {
	_id: '123123',
	name: 'Tom',
	age: 22,
	isActive: true,
};
// error because _id property is read-only
// userVar._id = '00000';

export {};
