// Crear un BigInt usando la función BigInt()
const bigInt1 = BigInt("123456789012345678901234567890");

// Crear un BigInt agregando "n" al final de un número
const bigInt2 = 98765432101234567890n;

// Realizar operaciones matemáticas con BigInts
const sum = bigInt1 + bigInt2;
const product = bigInt1 * bigInt2;

// Comparar BigInts
const isEqual = bigInt1 === bigInt2;
const isGreaterThan = bigInt1 > bigInt2;

// Mostrar resultados
console.log("BigInt1:", bigInt1);
console.log("BigInt2:", bigInt2);
console.log("Suma:", sum);
console.log("Producto:", product);
console.log("¿Son iguales?:", isEqual);
console.log("¿BigInt1 es mayor que BigInt2?:", isGreaterThan);

