"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// our variable can contan number or string
var score = 33;
score = 22;
score = '11';
var testUser = { name: 'Tom', age: 22 };
testUser = { userName: 'Tom', age: 22 };
// but should be carefull if funciton argument can take string or number value we should check his type to overcome errors
function getId(id) {
    if (typeof id === 'number') {
        console.log('ID:', id);
    }
    else {
        console.log('ID:', id.toUpperCase());
    }
}
getId(123456);
getId('qwerty');
// union with array
// can contain pnly numbers
var data = [1, 2, 3];
// can contain only strings
var data2 = ['1', '2', '3'];
// can contain numbers and strings
var data3 = [1, '2', 3, '4'];
// also union can be e speciifc value, thats mean that name var can be ONLY Tom or Jack or Harry
var name;
name = 'Tom';
