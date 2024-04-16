/**
 * Represents a user object.
 * @typedef {Object} User
 * @property {string} name - The name of the user.
 * @property {Function} greet - A function that logs a greeting message with the user's name.
 */

/**
 * Logs a greeting message with the user's name.
 * @memberof User
 * @method greet
 */

let user = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

user.greet(); // Hello, my name is John

/**
 * Logs the value of 'this'.
 */
function checkThis() {
  console.log(this);
}

checkThis();

function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

let userA = { name: "John" };
let admin = { name: "Admin" };

// use call to set this to user
greet.call(userA); // Hello, my name is John

// use call to set this to admin
greet.call(admin); // Hello, my name is Admin

let userP = {
  name: 'John',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

let user2 = { name: 'Jane' };

let greet = userP.greet.bind(user2);

greet(); // Hello, my name is Jane