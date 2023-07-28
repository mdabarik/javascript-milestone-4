// typeof operator
// var price = 100;
// console.log(typeof price);

var price = '100';
// console.log(typeof price)


/*
Data Types:
1. Primitive (number, string, boolean, undefined, null)
2. Non Primitive (object, array, function)
*/


// 0.1 and 0.2 creates problem
var n1 = 0.1;
var n2 = 0.2;
var sum = n1 + n2;
sum = sum.toFixed(1);
sum = parseFloat(sum)
console.log(sum);


var mangoes = 10;
var person = 2;
var remainder = mangoes % person;
console.log(remainder);
