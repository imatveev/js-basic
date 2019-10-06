//Declare a variable which will be encapsulated from global scope.
for (let i = 0; i < 10; i++) {
  let hiddenFromGlobalVar = 'Ben';
}
//Declare a variable which will appear in global object.
globalThis.sameName = 'Bond';

//Declare two variables which will be same-names but contain different values.
let sameName = 10;
// eslint-disable-next-line no-constant-condition
if (true) {
  let sameName = 3;
  alert(sameName);
}
alert(sameName);

//Declare a variable with hosting.
function foo() {
  name = 'Dimitrus';
  alert(name);
  var name;
}
foo();
