let task = {
  priority: "",
  task: "Finish editing the course",
};

// If task.priority is falsy, assign 'medium'
task.priority ||= "medium";
console.log(task.priority); // Output: 'medium'

task.priority = "high";
task.priority ||= "medium";
console.log(task.priority); // Output: 'high' (no 'medium' is assigned because task.priority is already truthy)

let num = 10;
num &&= 50;
console.log(num); // Output: 50 (num is truthy, the value on the right is assigned)

num = null;
num &&= 50;
console.log(num); // Output: null (num is falsy, the value on the right is not assigned)

let loggedUser = { name: "John" };
loggedUser &&= { ...loggedUser, favoriteColor: "purple" };
console.log(loggedUser); // Output: { name: 'John', favoriteColor: 'purple' }

let score;
score ??= 0; // Assigns 0 to score because it's undefined
console.log(score); // Output: 0

score ??= 100; // Doesn't assign 100 because score already has a value (0)
console.log(score); // Output: 0

function setupOptions(options = {}) {
  options.timeout ??= 3000; // Assigns 3000 to options.timeout if it's null or undefined
  options.retries ??= 5; // Assigns 5 to options.retries if it's null or undefined
  console.log(options);
}

setupOptions(); // Output: { timeout: 3000, retries: 5 }
setupOptions({ timeout: 100 }); // Output: { timeout: 100, retries: 5 }
setupOptions({ timeout: 0, retries: 0 }); // Output: { timeout: 0, retries: 0 }
