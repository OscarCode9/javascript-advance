function* evenNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number += 2;
    }
}

const evenGenerator = evenNumbers();
console.log(evenGenerator.next().value); // Returns 0
console.log(evenGenerator.next().value); // Returns 2


// Datos ficticios
const allImages = Array.from({ length: 1000 }, (_, i) => `https://example.com/image${i + 1}.jpg`);

// Función generadora para obtener lotes de imágenes
function* getBatchOfImages(images, batchSize = 10) {
  let index = 0;
  while (index < images.length) {
    yield images.slice(index, index + batchSize);
    index += batchSize;
  }
}

// Crear un generador de lotes de imágenes
const imageGenerator = getBatchOfImages(allImages);

// Obtener los primeros 3 lotes de imágenes
console.log(imageGenerator.next().value); // Lote de imágenes del 1 al 10
console.log(imageGenerator.next().value); // Lote de imágenes del 11 al 20
console.log(imageGenerator.next().value); // Lote de imágenes del 21 al 30
console.log(imageGenerator.next().value);
console.log(imageGenerator.next().value);
