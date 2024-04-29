// 1. Write a loop that prints out the numbers from 1 to 10.
for (let i = 1; i < 11; i++) {
	console.log(i);
}
console.log('- - - - - - - - - - - - - - - - - ');
// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7...
for (let i = 1; i <= 20; i += 2) {
	console.log(i);
}
console.log('- - - - - - - - - - - - - - - - - ');
// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...

console.log('- - - - - - - - - - - - - - - - - ');
// 4. Write a loop that finds the maximum number in an array of numbers.
const findMaxNumberInArray = [300, 1000, 23, 42, 300, 12, 7, 4, 90];
let maxNumber = findMaxNumberInArray[0];
for (let i = 1; i < findMaxNumberInArray.length; i++) {
	if (findMaxNumberInArray[i] > maxNumber) {
		maxNumber = findMaxNumberInArray[i];
	}
}
console.log(maxNumber);

console.log('- - - - - - - - - - - - - - - - - ');
// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [1, 10, 23, 42, 0, 12, 7, 0];

console.log('- - - - - - - - - - - - - - - - - ');
// 6. Write a loop that reverses a given string.
const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let reversedString = '';
for (let i = string.length - 1; i >= 0; i--) {
	reversedString += string[i];
	// '' + '.' => '.' (string.length-1)
	// '.' + 't' => '.t' (string.length-2)
	// '.t' + 'i' => '.ti' (string.length-3)
}
console.log(reversedString);

console.log('- - - - - - - - - - - - - - - - - ');
// 7. Write a while loop that counts from 10 to 1 and prints out each number.
let u = 10;
while (u >= 1) {
	console.log(u);
	u--;
}

console.log('- - - - - - - - - - - - - - - - - ');
// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.

let iterations = 0;
let randomNumber = 0;
while (randomNumber <= 8 && iterations < 2) {
	randomNumber = Math.floor(Math.random() * 10) + 1;
	iterations++;
	console.log('Current randomNumber', randomNumber);
}
console.log('- - - - - - - - - - - - - - - - - ');
console.log('Result random number', randomNumber);
console.log('Total ', iterations);

console.log('- - - - - - - - - - - - - - - - - ');
// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.

// 10. Write a for...in loop that prints out the keys and values of an object.
const person = { name: 'John', surname: 'Doe', age: 30, city: 'New York' };

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 11. Write a for...in loop that sums the values of an object.
const obj = { a: 10, b: 20, c: 30, d: 23 };
