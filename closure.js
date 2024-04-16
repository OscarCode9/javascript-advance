function idGenerator() {
  let count = 1;

  function generate() {
    return count++;
  }

  return generate;
}

const nextID = idGenerator();

console.log(nextID()); // 1
console.log(nextID()); // 2
console.log(nextID()); // 3

function authenticateUser(username, password) {
  let isAuthenticated = false;

  return function (loginUsername, loginPassword) {
    if (loginUsername === username && loginPassword === password) {
      isAuthenticated = true;
    }
    return isAuthenticated;
  };
}

const checkAuthentication = authenticateUser("user123", "password123");

console.log(checkAuthentication("user123", "password123")); // true
console.log(checkAuthentication("user123", "password456")); // false

function memoize(func) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = func(...args);
    }
    console.log(cache);
    return cache[key];
  };
}

function expensiveOperation(n) {
  console.log("Calculating...", n);
  return n * n;
}

const memoizedExpensiveOperation = memoize(expensiveOperation);

console.log(memoizedExpensiveOperation(5)); // Calculating... 5, 25
console.log(memoizedExpensiveOperation(5)); // 25 (from cache)
console.log(memoizedExpensiveOperation(6)); // Calculating... 6, 36

function createAuthenticationFunction(username, password, maxAttempts) {
    let attempts = 0;
    let isBlocked = false;
  
    return function(loginUsername, loginPassword) {
      if (isBlocked) {
        return "The account is temporarily blocked. Please try again later.";
      }
  
      if (loginUsername === username && loginPassword === password) {
        return "Login successful.";
      } else {
        attempts++;
        if (attempts >= maxAttempts) {
          isBlocked = true;
          return "Too many failed attempts. The account has been temporarily blocked.";
        } else {
          return "Incorrect username or password. Attempt " + attempts + " of " + maxAttempts + ".";
        }
      }
    };
  }
  
  // Create authentication function for user 'user123' with password 'password123' and a maximum of 3 attempts
  const authenticateUserV2 = createAuthenticationFunction('user123', 'password123', 3);
  
  console.log(authenticateUserV2('user123', 'password123')); // Login successful.
  console.log(authenticateUserV2('user123', 'wrongPassword')); // Incorrect username or password. Attempt 1 of 3.
  console.log(authenticateUserV2('user123', 'wrongPassword')); // Incorrect username or password. Attempt 2 of 3.
  console.log(authenticateUserV2('user123', 'wrongPassword')); // Too many failed attempts. The account has been temporarily blocked.
  console.log(authenticateUserV2('user123', 'password123')); // The account is temporarily blocked. Please try again later.
  
  