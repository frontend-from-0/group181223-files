interface User {
  id: number;
  name: string;
  age?: number;
  address?: Address;
}

const user1: User = { id: 1, name: "John" };
const user2: User = { id: 2, name: "Jane", age: 20};

interface AdminUser extends User {
  superAdmin: boolean;
} 

const user3: AdminUser = { id: 1, name: "Jane", superAdmin: false };


type ID = string | number;

interface Address {
  line1: string;
  line2:string;
  city: string;
  zip: number;
}


type Person = {
  id: ID;
  name: string;
  age?: number;
  address?: Address;
};

const person1: Person = { id: "123", name: "John" }; 
const person2: Person = { id: 123, name: "Jane", age: 30 };

/*
Main differences between interfaces and types:

Extending and Intersection
Interfaces use the extends keyword to inherit from other interfaces, while types use intersection (&) to combine multiple types

interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}

type AnimalType = {
  name: string;
}
type DogType = AnimalType & {
  breed: string;
}

Union Types
Types can represent union types directly, while interfaces cannot.

type Status = "pending" | "approved" | "rejected";


Primitive Types
Types can be used to create aliases for primitive types, while interfaces cannot.

type Age = number;


Use Cases

Use interfaces when:
- Defining object shapes or class structures
- You need declaration merging
- Working with object-oriented design patterns

Use types when:
- Creating union or intersection types
- Working with primitive types
- Needing computed properties
- Creating complex types (mapped types, conditional types, etc.)
*/
