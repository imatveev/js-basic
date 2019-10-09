

// Declare a variable on each type using two options: plain creation, creation with constructor.

//number
let number = 123;
console.log(number);

//string
let string = "some text";
console.log(string);

//boolean
let bool = true;
console.log(bool);

//undefined
let undef = undefined;
console.log(undef);

//null
let nul = null;
console.log(nul);

//object
let object = {
    a: 1,
    b: "text",
    c: {d: "a", e: null}
}
console.log(object);

object2 = new Object()
console.log(object2);


// Use operator typeof on each of them.

//number
let number = 123;
console.log(typeof(number));
number2 = new Number(777.123);
console.log(typeof(number2));


//string
let string = "some text";
console.log(typeof(string));
string2 = new String("new text");
console.log(typeof(string2));

//boolean
let bool = true;
console.log(typeof(bool));

//undefined
let undef = undefined;
console.log(typeof(undef));

//null
let nul = null;
console.log(typeof(nul));

//object
let object = {
    a: 1,
    b: "text",
    c: {d: "a", e: null}
}
console.log(typeof(object))

// Demonstrate object's references.

let object = {
    number: 333,
    string: "some text",
    "long name": undefined,
    nul: null,
    bool: false,
    object2: {a: 123, b: "text"}
};

object.new = 123.123;
object["long name2"] = "text";

let key = "nul" ;

console.log(object.number);
console.log(object["string"]);
console.log(object.object2.a);
console.log(object[key]);
console.log(object["long name"]);

// Demonstrate string's backticks features.

let string = `new string with calculation ${1+3}`;
console.log(string);

let key = "name"
let string2 = `new string with ${key}`;
console.log(string2);


// Declare an array containing different data types.

let array = [123, "string", false, null, undefined, {a: 1}];
console.log(array);


// Iterate through it and collect amount of each data type to object.

let array = [123, 2334, "string", false, null, undefined, {a: 1}, true, "sdf"];

  var string = 0;
  var number = 0;
  var nul = 0;
  var undef = 0;
  var bool = 0;
  var object = 0;


for (var i = 0; i < array.length; i++)
{

  
  if (typeof(array[i]) === "number")
    {
        number++;
    }
  
  else if (typeof(array[i]) === "string")
    {
        string++;
    }
  
  else if (typeof(array[i]) === "undefined")
    {
        undef++;
    }
  
  else if (typeof(array[i]) === "boolean")
    {
        bool++;
    }
  
  else if (typeof(array[i]) === "object")
    {
        object++;
    }
  
  else 
    {
        nul++;
    }
  
  
}

console.log("type Number - " + number);
console.log("type String - " + string);
console.log("type Boolean - " + nul);
console.log("type Null - " + bool);
console.log("type Undefined - " + undef);
console.log("type Object - " + object);






