let sum = 0;
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum); // Output: 30

const numbers = Array.from({ length: 11 }, (_, i) => i);
sum = numbers.filter((num) => num % 2 === 0).reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 30

{
  const originalList = [1, 2, 3, 4, 5];
  const doubledList = [];
  for (let i = 0; i < originalList.length; i++) {
    doubledList.push(originalList[i] * 2);
  }
  console.log(doubledList); // Output: [2, 4, 6, 8, 10]
}

{
  const originalList = [1, 2, 3, 4, 5];
  const doubledList = originalList.map((num) => num * 2);
  console.log(doubledList); // Output: [2, 4, 6, 8, 10]
}

{
  const numbers = [10, 20, 30, 40, 50];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  console.log(average); // Output: 30
}

{
  const numbers = [10, 20, 30, 40, 50];
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  console.log(average); // Output: 30
}


// Function definition
function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  // Assigning the function to a variable using const
  const myFunction = greet;
  
  // Calling the function through the variable
  myFunction("John");
  
  // Passing the function as an argument to another function
  function executeFunction(func, name) {
    func(name);
  }
  
  executeFunction(greet, "Mary");
  
  // Returning a function from another function
  function getGreetingFunction() {
    return function(name) {
      console.log("Greetings, " + name + "!");
    };
  }
  
  const greetingFunction = getGreetingFunction();
  greetingFunction("Carl");

  function pureSquare(num) {
    return num * num;
}

console.log(pureSquare(2)); // Output: 4

let value = 2;

function squareAndMutate(num) {
    value = num * num; // Modifies external state
    return value;
}

console.log(squareAndMutate(3)); // Output: 9
console.log(value); // Output: 9 (the value of 'value' has been modified)

function impureAddToArray(arr, value) {
    arr.push(value); // Modifies the external array
    return arr;
}

const colors = ['red', 'orange'];
console.log(impureAddToArray(colors, 'yellow')); // Output: ['red', 'orange', 'yellow']
console.log(colors); // Output: ['red', 'orange', 'yellow'] (the original array has been modified)

function pureSquare(num) {
    return num * num;
}

console.log(pureSquare(2)); // Output: 4

function pureAddToArray(arr, value) {
    const newArr = [...arr]; // Create a copy of the original array
    newArr.push(value); // Add the new value to the end of the copy
    return newArr; // Return the modified copy
}

const colors = ['red', 'orange'];
console.log(pureAddToArray(colors, 'yellow')); // Output: ['red', 'orange', 'yellow']
console.log(colors); // Output: ['red', 'orange'] (the original array has not been modified)

// First-class function: stored in a variable
const greet = function(name) {
    console.log("Hello, " + name + "!");
  };
  
  // Passing a function as an argument to another function
  function execute(func, name) {
    func(name);
  }
  
  execute(greet, "John");

  // Higher-order function that returns a function
function repeatTwice(func) {
    return function(name) {
      func(name);
      func(name);
    };
  }
  
  const greetTwice = repeatTwice(greet);
  greetTwice("Mary");

  // Another higher-order function that returns a function
function multiplyBy(factor) {
    return function(number) {
      console.log(number * factor);
    };
  }
  
  const multiplyByThree = multiplyBy(3);
  multiplyByThree(7); // Output: 21

  // Impure function that mutates an array
const addNumber = (array, number) => {
    array.push(number);
    return array;
  };
  
  // Pure function that creates a new copy of the array with the added number
  const addNumberPure = (array, number) => {
    return [...array, number];
  };

  // Mutable object example
const person = { name: "Teddy", age: 30 };
person.age = 31; // Mutating the object directly

// Immutable object example
const newPerson = { ...person, age: 31 }; // Creating a new object with modified age

const originalObject = {
    a: {
      b: {
        c: 1
      }
    }
  };
  
  // Updating a deeply nested property using spread syntax
  const updatedObject = {
    ...originalObject,
    a: {
      ...originalObject.a,
      b: {
        ...originalObject.a.b,
        c: 2
      }
    }
  };


  const originalArray = [1, 2, 3, 4];

// Adding an element to the beginning of the array
const newArray1 = [0, ...originalArray];

// Removing the last element from the array
const newArray2 = originalArray.slice(0, -1);

const originalArray = [{ id: 1, name: "John" }, { id: 2, name: "Alice" }];

// Updating an element in the array based on ID
const updatedArray = originalArray.map(item =>
  item.id === 1 ? { ...item, name: "Jane" } : item
);

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Updating state immutably
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

import produce from "immer";

const originalState = {
  todos: [
    { id: 1, text: "Learn JavaScript", completed: false },
    { id: 2, text: "Learn React", completed: false }
  ]
};

// Updating nested state immutably using Immer library
const newState = produce(originalState, draft => {
  draft.todos[0].completed = true;
});

function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Test the iterative factorial function
  console.log(factorialIterative(3)); // Output: 6
  console.log(factorialIterative(4)); // Output: 24
  console.log(factorialIterative(5)); // Output: 120

  