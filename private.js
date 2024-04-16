class Person {
  // Public field
  name = "John";

  // Private field
  #age = 30;

  // Public method
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  // Private method
  #calculateBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.#age;
  }

  // Public method that uses the private method and field
  getBirthYear() {
    const birthYear = this.#calculateBirthYear();
    console.log(`I was born in ${birthYear}`);
  }
}

const person = new Person();
console.log(person.name); // Output: John
person.greet(); // Output: Hello, my name is John
person.getBirthYear(); // Output: I was born in 1991
console.log(person.age); // Output: undefined (private field)
person.age = 40; // Error: Cannot set private field+
console.log(person.#age); // Error: Cannot access private field
