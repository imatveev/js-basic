// Tasks
//1
{
  let a = 'Hi';
  console.log(a);
}
//2
a = 2;
console.log(window.a);

//3
let a = 3;
{
  const a = 'Hi';
  console.log(a);
}
console.log(a);

// Hoisting
console.log(a);
var a;