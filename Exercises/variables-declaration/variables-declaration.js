// 1. Declare a variable which will be encapsulated from global scope.
{ 
    let vegetables = 'cucumber';
    console.log(vegetables);
}

console.log(vegetables);

// 2. Declare a variable which will appear in global object.
var globalV = 'Done';
alert(window.globalV);

// 3. Declare two variables which will be same-names but contain different values.
const car = 'Volvo';
console.log(car);

{
    const car = 'BMW'
    console.log(car);
}