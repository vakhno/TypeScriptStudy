interface User {
	name: string;
	email: string;
	userId: number;
	// optional field, if we need we can use it
	gitId?: number;
	// also as field we can use function, that will return a string or what ever we want
	userCall?(): string;
	showCoupon(couponNumber: number): string;
}

const newUser: User = {
	name: 'Tom',
	email: 'ts@gmail.com',
	userId: 1,
	userCall: (): string => newUser.name,
	showCoupon: (couponNumber: number): string => `${newUser.name} has ${couponNumber} coupons`,
};
newUser.gitId = 2;
// error  because User interface doesnt contain googleId field;
// newUser.googleId = 3;
// but to call optional function we should check if it realy exist
newUser.userCall && console.log(newUser.userCall());
// non optional function
console.log(newUser.showCoupon(5));

// some interfaces can extends another one
interface Admin extends User {
	role: 'admin' | 'employee' | 'CEO';
}

const newAdmin: Admin = {
	role: 'CEO',
	name: 'Bob',
	email: 'ceo@gmail.com',
	userId: 22,
	showCoupon: (couponNumber: number): string =>
		`${newUser.name} is an Admin and has ${couponNumber} coupons`,
};

console.log(newAdmin);

export {};
