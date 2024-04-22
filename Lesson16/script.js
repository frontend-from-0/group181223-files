/*  
Functions

Functions are one of the fundamental building blocks of the language. They are reusable blocks of code that can be executed when needed. Functions encapsulate a set of statements and can be called or invoked to perform a specific task or calculation. 

Function Declaration
Anonymous function
function (parameter1, parameter2) {
  return parameter1 * parameter2;
};

Named function:
*/
function multiplyTwoNumbers(parameter1, parameter2) {
	return parameter1 * parameter2;
}
console.log(multiplyTwoNumbers(1, 4));
/*
Function Expression
const sumOfTwoNumbers = function (parameter1, parameter2) {
  return parameter1 + parameter2;
};
console.log(sumOfTwoNumbers(1, 4));


Arrow Function (introduced in ECMAScript 6 OR ES6)
const greet = () => {
  console.log('Hello world');
};

greet();
*/
// IIFE (Immediately Invoked Function Expression)
(function multiplyTwoNumbers(parameter1, parameter2) {
	console.log('Hello');
	return parameter1 * parameter2;
})();

// console.log(multiplyTwoNumbers(1, 4));

/* 
Conditional statements (if...else, switch)

Conditional statements in JavaScript are used to make decisions and execute different blocks of code based on certain conditions. They allow you to control the flow of your program and determine which code should be executed depending on whether a condition evaluates to true or false.

if Statement
if (condition) {

}
// Same line if condition:
if (today === 'Wednessday') console.log('Join the lesson');

if ... else Statement
if (condition) {
 ... some code
} else if (another condtion) {
 ... some code
} else {
 ... some code
}

Switch statement
switch (day) {
  case 'Monday':  // this means that day === 'Monday'
   console.log('It\'s Monday'); 
   break;
  case 'Tuesday':
    console.log('It\'s Tuesday');
    break; // Use break key word if you don't use return key word in the statement;
    .... cases for other days of the week
  default:
    console.log('Unknow day');
    break;
}
*/

// 1. Write a function that takes in a number and checks if it's even or odd using if else statement.
const number = 0;

function isEvenOrOdd(number) {
	console.log("Here's number: ", number);

	if (number % 2 == 0) {
		console.log("It's an even number");
	} else {
		console.log("It's an odd number");
	}
}

isEvenOrOdd(77);
isEvenOrOdd(10);
isEvenOrOdd(23);

console.log("Here's number (global scope): ", number);

function isEvenOrOddWithReturn(number) {
	console.log("Here's number (2): ", number);

	if (number % 2 == 0) {
		return "It's an even number";
	} else {
		return "It's an odd number";
	}
}

console.log(isEvenOrOddWithReturn(77));

// 2. Write a function that takes age as input. If the age is less than 18, print "Sorry, you are not old enough to vote". If the age is between 18 and 65 (inclusive), print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen".
function canVote(age) {
	if (age < 18) {
		console.log('Sorry, you are not old enough to vote');
	} else if (18 <= age && age <= 65) {
		console.log('You are eligible to vote');
	} else {
		console.log('You are a senior citizen');
	}
}
canVote(17);
canVote(40);
canVote(80);


// 3. Write a function that asks the user to enter two numbers and checks if the first number is greater than, less than, or equal to the second number using if else statement.

// 4. Write a function that takes in a string and checks if the first letter is uppercase using if else statement.
function isFirstLetterUppercase(string) {
	if (string[0].toUpperCase() === string[0]) {
		return true;
	} else return false;
}

console.log(isFirstLetterUppercase('first letter'));
console.log(isFirstLetterUppercase('First letter'));
// function isFirstLetterUppercase(string) {
//   if (string[0].toUpperCase() === string[0]) return true;
//   return false;
// }

// function myFunction(val) {
//   if ( val < 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function anotherFunction () {
//   if (myFunction()) {
//     return result;
//   }
// }

// 5. Write a function that takes in a number and checks if it's positive, negative, or zero using if else statement.

// 6. Write a function that takes in a year and checks if it's a leap year (is divisible by 4 and not divisible by 100 OR divisible by 400) or not using if else statement.

// 7. Write a function that takes in a temperature and checks if it's above or below freezing using if else statement.

// 8. Write a function that takes in a person's height and weight and checks if they are considered underweight, normal, overweight, or obese using if else statement.
// Body Mass Index (BMI) is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). A high BMI can indicate high body fatness.
//Formula: weight (kg) / [height (m)]2
// Below 18.5	Underweight
// 18.5 – 24.9	Healthy Weight
// 25.0 – 29.9	Overweight
// 30.0 and Above	Obesity

// 9. Write a function that takes in a person's age and checks if they are a child (age 0-12), teenager (age 13-19), adult (age 20-64), or senior citizen (age 65 and above) using if else statement.

// 10. Write a function that takes age as a number and whether they are a student (yes or no). If the age is less than 18 and the user is a student, print "You are a student and not old enough to vote". If the age is between 18 and 65 (inclusive) and the user is not a student, print "You are eligible to vote". If the age is greater than 65, print "You are a senior citizen". If the user is a student but their age is greater than or equal to 18, print "You are old enough to vote".

// 11. Write a function that asks the user to enter their salary and their years of experience. If the salary is less than $30,000 and the years of experience are less than 5, print "Sorry, we cannot offer you the job at this time". If the salary is less than $50,000 and the years of experience are between 5 and 10 (inclusive), print "We can offer you the job at a lower salary". If the salary is greater than or equal to $50,000 or the years of experience are greater than or equal to 10, print "We can offer you the job at the requested salary".

// 12. Write a function that asks the user to enter their score on a test. If the score is less than 60, print "You failed the test". If the score is between 60 and 70 (inclusive), print "You passed the test, but your grade is not great". If the score is between 71 and 80 (inclusive), print "You got a B". If the score is between 81 and 90 (inclusive), print "You got an A". If the score is greater than 90, print "You got an A+ - Great job!".

// 13. Write a function that asks the user to enter a month number (1-12) and displays the corresponding season name. Use a switch statement to handle the different cases.
function getSeasonName(monthNumber) {
	switch (monthNumber) {
		case 1:
		case 2:
		case 12:
			console.log("It's winter");
			break;
		case 3:
		case 4:
		case 5:
			console.log("It's spring");
			break;
		case 6:
		case 7:
		case 8:
			console.log("It's summer");
			break;
		case 9:
		case 10:
		case 11:
			console.log("It's autumn");
			break;
		default:
			console.log('Unsupported month number');
			break;
	}
}
getSeasonName(3);
// 14. Write a function that asks the user to enter a grade letter (A, B, C, D, or F) and displays a message indicating whether the grade is passing (A, B, C) or failing (D, F). Use a switch statement to handle the different cases.

// 15. Write a function that asks the user to enter their age, and then calculates and displays their age in dog years (where one human year is equivalent to seven dog years). If the user enters a negative number or zero, display an error message.
