// 1. Assign string with unicode to a variable.
console.log(`hi ${'\u03A9'}`);

// 2. Declare a variable with string with escaped symbols.
console.log('hi \n my dear friend');

// 3. Declare a variable which will contain name of your favourite animal.
const animal = 'Dog';
console.log(animal);
// 4. Log a message `My favourite animal is ` with dynamic variable from previous task.
console.log(`My favourite animal is ${animal}`);
//5. Declare a variable which contain name and surname of your favourite writer in lowercase. Log his/her name with capitals first letters.
let nameSurname = 'dale Carnegie';
let changeName = nameSurname.substring(0, 1);
console.log(changeName.toLocaleUpperCase() + nameSurname.substring(1));