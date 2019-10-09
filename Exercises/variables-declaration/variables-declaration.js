//1. Declare a variable which will be encapsulated from global scope.


let variable = "global"; 

{
    let variable2 = "not global";
}


// Declare a variable which will appear in global object.

let a = 1;
var b = 2;
const c = 3;

// Declare two variables which will be same-names but contain different values.

let sameName = 1;

{
    let sameName = 2;
}


// Declare a variable with hosting.

console.log(a);
var a = 3;

