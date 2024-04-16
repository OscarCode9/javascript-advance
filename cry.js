const crypto = require('crypto');

function uniqueIDGenerator(prefix = '') {
    let counter = 0;

    function generateUniqueID() {
        counter++;
        const id = prefix + crypto.randomBytes(8).toString('hex') + counter;
        return id;
    }

    return generateUniqueID;
}

// Creamos un generador de ID único con un prefijo específico
const generateProductID = uniqueIDGenerator('product_');

// Generamos algunos IDs únicos para productos
console.log(generateProductID()); // Ejemplo de ID de producto: product_d2a8fcb1
console.log(generateProductID()); // Otro ejemplo de ID de producto: product_e6d5bfc2