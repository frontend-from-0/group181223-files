// Arrays 
// Basic Example
const numbers = [1, 2, 3, 4, 5];

// Without destructuring
// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];
// const fourth = numbers[3];


// With destructuring
// const [first, second, third, fourth] = numbers;

// console.log(first); // 1
// console.log(second); // 2
// console.log(third); // 3
// console.log(fourth); // 4
// console.log('--------'); // 4



// Skipping Elements
// const [first, , , fourth] = numbers;
// console.log(first); // 1
// console.log(fourth); // 
// console.log('--------'); // 4


// Using Rest Parameters to Capture the Rest of the Elements
// const [first, second, ...rest] = numbers;
// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]

// Default Values
// const numbersForDefaultValuesExample = [1];
// const [a = 10, b = 20] = numbersForDefaultValuesExample;

// console.log(a); // 1
// console.log(b); // 20


// Objects
// Basic Usage

const person = {
  name: 'Alice',
  age: 30,
  job: 'Engineer',
  isStudent: true
};

// Without destructuring
// const name = person.name;
// const age = person.age;

// With destructuring
// const { name, age } = person;

// console.log(name); // Alice
// console.log(age);  // 30

// Renaming Variables
const { age: personAge, name } = person;
// const age = person.age;
// const name = person.name;

// console.log(name); // Alice
// console.log(personAge);  // 30


// Default Values
// const { name: anotherPersonName, isStudent = false } = person;

// console.log(anotherPersonName); // Alice
// console.log(student);  // false

// Nested Objects

const personWithContactInfo = {
  name: 'Dave',
  age: 32,
  contact: {
    email: 'dave@example.com',
    phone: '123456789',
    address: {
      line1: "Kungstagatan 1",
      postcode: '444222'
    }
  }
};

// const { 
//   name: firstName,
//   contact: { email, phone, address: {line1, postcode: postalCode} } 
// } = personWithContactInfo;

// console.log(firstName); // Dave
// console.log(email); // dave@example.com
// console.log(phone); // 123456789
// console.log(line1); // Kungstagatan 1
// console.log(postalCode); // 444222



// Rest Properties
const { name: nameForRestExample, age: ageForRestExample, ...rest } = personWithContactInfo;
console.log(nameForRestExample);
console.log(ageForRestExample);
console.log(rest);

// In JS, ... is called 'rest operator'




