//1. Declare a variable on each type using two options: plain creation, creation with constructor.
//2. Use operator typeof on each of them.
let a = 5;
console.log(typeof a);

let a = new Number(5)

let b = 'Alex';
console.log(typeof b);

let b = new String('Alex')

let c = true;
console.log(typeof c);

let c = new Boolean()

let d = null
console.log(typeof d);

let e = undefined
console.log(typeof e);

let f = {}
console.log(typeof f);

let f = new Object ({})

let g = Symbol()
console.log(typeof g);

//3. Demonstrate object's references.

let house = {table : 'red', chair : 'brown' };
let room = house;
room.table = 'green';
console.log(house);

//4. Demonstrate string's backticks features.
const name = 'Alex';
const lastName = 'Chang';
const fullName = `Our new teacher is ${name} ${lastName}`
console.log(fullName);

//1.Declare a variable with hoisting. 
console.log(variableWithHosting);
var variableWithHosting = 'Hi';


