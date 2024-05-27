  /* Programming paradigms
  OOP - Object Oriented programming
  FP - Functional programming

  OOP:  state is usually stored in objects and can be modified through methods 
  FP: state is immutable, and functions are designed to transform data rather than mutate it
  
  OOP: classes encapsulates related data and behavior
  FP: problems are broken down into smaller, composable functions that can be combined to solve larger problems.

*/

const user1 = {
  username: 'XXX',
  password: 'xcasas',
  age: 20,
  isStudent: false
};

const user2 = {
  name: 'YYYY',
  password: 'sadas',
  age: 20,
  isStudent: false
};

class User {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }

  // Getter method
  get username () {
    return this._username.toUpperCase();
  }

  // Setter method
  set username (newUsername) {
    this._username = '**' + newUsername + '**';
  }

  login () {
    return `User ${this._username} is logging in...`;
  }

  logout () {
    return `User ${this._username} is logging out...`;
  }
}

class AdminUser extends User {
  constructor(username, password, isSuperAdmin) {
    super(username, password);
    this._isSuperAdmin = isSuperAdmin;
  }

  changeSettings() {
    return `Admin user ${this._username} is modifing settings...`;
  }
}

// Instantiation of the object
const user3 = new User('anna12312', '12345');
console.log(user3.username);
user3._password = undefined;
user3.username = 'NewUserName';
console.log(user3);

const user4 = new AdminUser('xyz123', '12345', true);
console.log(user4.username);
user4.username = 'User4';

console.log(user3.username);
console.log(user4.username);



class DemoClass {
  constructor(name) {
    this._name = name;
  }
}

const demo1 = new DemoClass('First name');
const demo2 = new DemoClass('Second name');

console.log(demo1);
console.log(demo2);

