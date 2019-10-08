// # Declaration
// 1. Declare a variable which will be encapsulated from global scope.

if (true) {
  let encapsulatedVariable = 777
}

// 2. Declare a variable which will appear in global object.

window.globalVariable = {
  name: "John"
};

alert(window.globalVariable);

// 3. Declare two variables which will be same-names but contain different values.

let sameName = "Hello!";

if(true){
  let sameName = "World!";
}

console.log(sameName);

// # Hoisting
// 1. Declare a variable with hosting.

console.log(hostedVariable); // Output: undefined

var hostedVariable = 'The variable with hosting.'
