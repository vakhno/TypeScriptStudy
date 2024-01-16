// its s simple enum, he is contain constants (it we nothing assign to them they will be contain their indexes as value)
enum spicificConstants {
	ENUM1, // 0
	ENUM2, // 1
	ENUM3, // 2
}
// here enum with custom values
enum spicificConstants2 {
	ENUM11 = 'VALUE-1', // VALUE-1
	ENUM22 = 'VALUE-2', // VALUE-2
	ENUM33 = 'VALUE-3', // VALUE-3
}
// we can use our constants with values and without them
enum spicificConstants3 {
	ENUM111 = 'VALUE-1', // VALUE-1
	ENUM222 = 'VALUE-2', // VALUE-2
	ENUM333 = 'VALUE-3', // VALUE-3
	ENUM444 = 5, // 5
	ENUM555, // 6
	ENUM666, //7
}

//but you should be careful, because to use constant without values, we should assign a number value to constant before empty constant
enum spicificConstants4 {
	ENUM1111 = 'VALUE-1',
	ENUM2222, // error, because ENUM1111 constant contain not a number
}

// no error because ENUM11111 contain a number
enum spicificConstants5 {
	ENUM11111 = 1, // 1
	ENUM22222, // 2
}
