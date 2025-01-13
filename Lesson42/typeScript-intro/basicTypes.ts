// The string type is used for textual data. It's similar to strings in JavaScript.
let firstName: string = "Alice";
// let firstName = "Alice";

// This type is used for numeric values. TypeScript does not differentiate between integers and floats - all numbers are simply number.
const age: number = 30;

//The boolean type is for true/false values, just like in JavaScript.
const isActive: boolean = true;

const missingValue: null = null;

// Arrays can be written in two ways: Type[] or Array<Type>.
const list: number[] = [1, 2, 3];
const anotherList: Array<string> = ['1', '2', '3'];

// Tuples allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
const person: [string, number] = ["Alice", 30]; // A tuple of string and number

// Enums are a way of giving more friendly names to sets of numeric values.
enum Color {Red, Green, Blue, Yellow};

let primaryColor: Color = Color.Green;
primaryColor = Color.Yellow;

console.log('primaryColor', primaryColor);
enum Weekdays {
  MO = 'Monday',
  TUE = 'Tuesday',
  WED = 'Wednesday'
  //...
};

console.log('Monday', Weekdays.MO);

// The any type allows for any type of value, opting out of type-checking. Use this sparingly as it defeats the purpose of TypeScript.
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Used for functions that do not return a value.
function warnUser(): void {
  console.log("This is a warning message");
}

type WarnUserArrowFunction = () => void;

const warnUserArrow: WarnUserArrowFunction = () => {
  console.log("This is a warning message");
}

// In TypeScript, both undefined and null actually have their own types named undefined and null respectively.
const u: undefined = undefined; // if values wasn't set yet
const n: null = null;  // if we want to re-set / remove value


// The `never` type represents the type of values that never occur. For instance, it is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns.

function error(message: string): never {
  throw new Error(message);
}











