// Ejemplo de isNaN()
console.log(isNaN(NaN));            // true
console.log(isNaN("hello"));        // true (no se puede convertir a número)
console.log(isNaN("123"));          // false (se puede convertir a número)
console.log(isNaN(123));            // false (es un número)
console.log(isNaN(undefined));      // true (no se puede convertir a número)
console.log(isNaN(null));           // false (se considera un número)

// Ejemplo de Number.isNaN()
console.log(Number.isNaN(NaN));    // true
console.log(Number.isNaN("hello"));  // false (no es NaN)
console.log(Number.isNaN("123"));    // false (no es NaN)
console.log(Number.isNaN(123));      // false (no es NaN)
console.log(Number.isNaN(undefined));  // false (no es NaN)
console.log(Number.isNaN(null));     // false (no es NaN)