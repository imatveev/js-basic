//1.Assign by hand same value to 3 variables in binary, octal and hexadecimal format.
{
  const num = new Number(2);
  console.log(num);
}
{
  const num = new Number(8);
  console.log(num);
}
{
  const num = new Number(16);
  console.log(num);
}

//2.Implement function extractNumbers which will leave only numbers in passed string.
let num = '123rr';

function extractNumbers(num) {
  return parseInt(num);
}

console.log(extractNumbers(num));

//3.Declare a variable with decimal value and convert to binary, octal and hexadecimal.
let num = new Number(10);
let str_1 = num.toString(2);
console.log(parseInt(str_1, 2));
let str_2 = num.toString(8);
console.log(parseInt(str_2, 8));
let str_3 = num.toString(16);
console.log(parseInt(str_2, 16));

//4. use Math.random to generate random value from 0 to 100.
let a = Math.round(Math.random());
for (a; a < 101; a++) {
  console.log(a);
}
