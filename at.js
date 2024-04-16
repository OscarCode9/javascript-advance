const colores = ['rojo', 'naranja', 'amarillo', 'verde'];

// Accediendo con índices positivos
console.log(colores[0]); // Salida: 'rojo'
console.log(colores.at(0)); // Salida: 'rojo'

// Accediendo con índices negativos
console.log(colores[colores.length - 1]); // Salida: 'verde'
console.log(colores.at(-1)); // Salida: 'verde'
console.log(colores.at(-2)); // Salida: 'amarillo'
console.log(colores.at(-3)); // Salida: 'naranja'
console.log(colores.at(-4)); // Salida: 'rojo'

