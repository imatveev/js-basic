// 1. Get `100` using `+` operator and numeric value `10`
let num = 10;
console.log(num + String(0))

// 2. You have following string: `Amazon annual revenue of US$232.887 billion` extract revenue and count monthly income.
let str = 'Amazon annual revenue of US$232.887 billion'
// var regex = (/[\d|,|.|e|E|\+]+/g)
var numEl = parseInt(str.match(/\d+/))
console.log(numEl/12)

// 3. Declare variable which will contain logs counter. Log few times with updating this value accordingly.