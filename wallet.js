function createAccount(pin, initialDeposit) {
  let balance = initialDeposit;
  let accountPin = pin;

  return {
    checkBalance: function (inputPin) {
      if (inputPin === accountPin) {
        return `Your current balance is ${balance}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    deposit: function (inputPin, amount) {
      if (inputPin === accountPin) {
        balance += amount;
        return `Successfully deposited $${amount}. Current balance: $${balance}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    withdraw: function (inputPin, amount) {
      if (inputPin === accountPin) {
        if (amount > balance) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        } else {
          balance -= amount;
          return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
        }
      } else {
        return "Invalid PIN.";
      }
    },
    changePin: function (oldPin, newPin) {
      if (oldPin === accountPin) {
        accountPin = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN.";
      }
    },
  };
}

// Example usage:
let account = createAccount("1234", 100);

console.log(account.checkBalance("oops")); // "Invalid PIN."
console.log(account.deposit("1234", 250)); // "Successfully deposited $250. Current balance: $350."
console.log(account.withdraw("1234", 300)); // "Successfully withdrew $300. Current balance: $50."
console.log(account.withdraw("1234", 100)); // "Withdrawal amount exceeds account balance. Transaction cancelled."
console.log(account.changePin("1234", "5678")); // "PIN successfully changed!"

function specialAdd(n) {
  let sum = 0;
  if (isNaN(n)) {
    return sum;
  } else {
    sum = sum + n;
  }
  return function addNumm(number) {
    if (number) {
      sum = sum + number;
      return addNumm;
    } else {
      return sum;
    }
  };
}

console.log(specialAdd(2)(4)());

function specialAdd(num) {
  let total = 0; // Store the running total

  function inner(newNum) {
    if (newNum !== undefined) { // If a number is provided, add it
      total += newNum;
      return inner; // Return the inner function for chaining
    } else {   // If no number is provided, return the total
      return total; 
    }
  }

  return inner(num); // Initialize with optional first number 
}