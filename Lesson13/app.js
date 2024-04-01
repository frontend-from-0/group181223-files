// alert('This is an external file');

// This is a single line comment in JS

/*
This 
is
a multiline
comment
in JS
*/

// Expression
console.log(10 + 5);
console.log('hello' + ' world');

// Statement
const myName = 'Anna';
const result = 10 + 10;

// If you need to find out if a thing in JS is an expression or statement, you can place it inside () of the console.log() function.

// Types of values that can be used in JS:
// String
const anotherName = 'Anna 10 + = '; // or "Anna"

console.log('anotherName', anotherName);
// Number (max number value is 1.7976931348623157e+308)
const age = 30;
const price = 10.99;
console.log('age and price', age, price);


// BigInt
const veryLargeNumber = BigInt(12312312);

// Boolean
const isStuden = false; // true

console.log('isStuden', isStuden);


// Undefined - absence of value "by defult"
const variableWithNoValueSet = undefined;

// Null - absence of value with intent
const absentValue = null;

// Object
const address = {
  line1: 'Kungstorget 10',
  line2: null,
  city: 'Gothenburg', 
  postalCode: '123 45',
  isPrimary: true,
  aNumber: 10,
  somethingElse: {
    anotherDetail: {
      dasdas: {

      }
    }
  }
};

// Array (it's also an object)
const emptyArray = []; 
const fruits = ['apple', 'pear', 'watermelon'];
const mixedArray = ['string', 10, true, null, undefined, {}];
const addressBook = [{line1: 'sadasd'}, {line1: 'asasfa'}, {line1: 'asasfa'}];

// Symbol
const mySymbol = Symbol('symbol type');

/* Key words:
const
let
var
true
false
null
undefined
Symbol
BigInt
*/

// Functions below are not available in terminal, they only work in the browser:
// alert('');
// prompt('Enter your age');

// Variable
// const - keyword that is used to create a variable which value cannot be changed
// let - keyword that is used to create a variable which value can be changed

let mySurname;
console.log('My surname is: ', mySurname);
mySurname = 'Atalay';
console.log('My surname is: ', mySurname);
mySurname = true;
console.log('My surname is: ', mySurname);
mySurname = {old: 'XXX', new: 'YYYY'};
console.log('My surname is: ', mySurname);

// var - keyword that is used to create a variable which value can be changed
var myVariable = 10;
myVariable = 'string';


// camelCase is commonly used in JS: oneTwoThree













