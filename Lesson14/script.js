// 1. Declare a variable x and initialize it to 5.
// Declare a variable y and initialize it to 3.
// Declare a variable z and initialize it to the sum of x and y.
const x = 5;
const y = 3;
const z = x * (x + y);
console.log('Exercise 1:');
console.log('------------------------');
// 2. Declare a variable name and initialize it to your name as a string.
// Declare a variable age and initialize it to your age as a number.
// Declare a variable phrase and initialize it to the string "Hello, world!".
// Add name and age to the sentence above. "Hello, world! My name is (name). I'm (age) years old.".
const name = 'gokce';
const age = 26;
const phrase = 'Hello, world!';
// String concatinations:
console.log(phrase + ' My name is ' + name + ". I'm " + age + ' years old.');
// String interpolation
console.log(`${phrase} My name is ${name}. I\'m ${age} years old.`);

const myNumber = 20;
const notANumber = '20'; // "20"
// Postal code, telefon number, birth dates, etc. are usually used as string type in JS
// NUmbers are usually used for arithmetical operations.

console.log('myNumber', typeof myNumber);
console.log('notANumber', typeof notANumber);
console.log(
	'sum of myNumber and notANumber',
	myNumber + notANumber,
	notANumber + myNumber
);

console.log('------------------------');
// 3. Declare a variable number1 and initialize it to 10.
// Declare a variable number2 and initialize it to 3.
// Declare a variable result and initialize it to the quotient of number1 divided by number2.
// Declare a variable number3 and initialize it to the difference between number1 and number2.

const number1 = 10;
const number2 = 3;
const result = number1 / number2;
const number3 = number1 - number2;
console.log(`exercise3 ${result} ${number3}`);
console.log('------------------------');
// 4. Declare a variable firstName and initialize it to your first name as a string.
// Declare a variable lastName and initialize it to your last name as a string.
// Declare a variable fullName and initialize it to the concatenation of firstName and lastName.
const firstName = 'fercan';
const lastName = 'surer';
const fullName = firstName + ' ' + lastName;

console.log('Exercise 4:', fullName, `${firstName} ${lastName}`);
console.log('------------------------');
// 5. Declare a variable number4 and initialize it to 7.
// Declare a variable number5 and initialize it to 2.
// Declare a variable result2 and initialize it to the product of number4 and number5 (multiply numbers).
const number4 = 7;
const number5 = 2;
const result2 = number4 * number5;
console.log(`Exercise 5: ${result2} ${number5}`);
// camelCase
console.log('------------------------');
// 6. Declare a variable PI and initialize it to the value of PI (3.14159). There's a built in function to do that (Math.PI).
const PI = Math.PI;
console.log(`Exercise 6: ${PI}`);
console.log('------------------------');
// 7. Declare a variable counter and initialize it to 0.
// Increment the counter variable by 1 using 3 different ways to increment numbers.
let counter = 0;
counter++; // postfix increment operator counter = 1
counter += 1; // counter + 1; counter = 2
counter = counter + 1; // counter = 3
++counter; // prefix increment operator counter = 4

console.log('counter: ', counter, ++counter, counter++);
console.log('counter: ', counter);
console.log('counter: ', ++counter);
console.log('counter: ', counter);
console.log('counter: ', counter++);
console.log('counter: ', counter);

console.log('------------------------');
// 8. Declare a variable temperature and initialize it to 20.
// Increase the value of temperature by 5 and log the result to console.

let temperature = 20;
temperature += 5;
console.log(`exercise8 ${temperature}`); // ` backtick
console.log(`exercise8`, temperature); // ` backtick

console.log('Exercise 8:' /* Result here */);
console.log('------------------------');
// 9. Declare a variable number6 and initialize it to 6. Declare a variable number7 and initialize it to `++number6` (number6 incremented using prexif ++ operator). Log both values to the console.

console.log('------------------------');
// 10. Declare a variable number8 and initialize it to 8. Declare a variable number9 and initialize it to `number8++` (number8 incremented using postfix ++ operator). Log both values to the console.

console.log('------------------------');
// 11. Declare a variable number10 and initialize it to -3. Use the postfix ++ operator to increment the value of num by 1, then multiply the result by 2 and log it to the console.

console.log('------------------------');
// 12. Declare two variables a and b and initialize them to 2 and 3, respectively. Use the prefix ++ operator to increment the value of a by 1, then add b to the result and log it to the console.

console.log('------------------------');
// BONUS: generate random number in a range from 0 (excluding) to 10 (including)
// Use Math.floor() and Math.random() to do that.
// Math.random() generate random number between 0 and 1 (not including 1)
// Math.floor()
