//1. Declare a variable on each type using two options: plain creation, creation with constructor.1
let a = 123;
a = new Number(123);
a = 'Hello';
a = new String('Hello');
a = true;
a = new Boolean(true);
a = null;
a = undefined;
a = Symbol('Hi');
a = {
  1: 'First',
  2: 'Second'
};

// 2.Use operator typeof on each of them.
let a = typeof (123);
a = typeof ('Hello');
a = typeof (true);
a = typeof (null);
a = typeof (undefined);
a = typeof (Symbol('Hi'));
a = typeof ({
  1: 'First',
  2: 'Second'
});

//4. Demonstrate object's references.
let obj = {
  1: 'Apple',
  2: 'banana',
};
const copyValue = {...obj};
copyValue['3'] = 'pineapple';
console.log(obj);

//5. Demonstrate string's backticks features.
let dog = 'Dogs';
let food = 'sausages';
console.log(`${dog} likes ${food}`);
