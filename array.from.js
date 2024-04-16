const numbersArray = Array.from({ length: 100 }, (_, index) => index + 1);

console.log(numbersArray); // Muestra un array con números del 1 al 100

const str = 'Hola Mundo';
const charArray = Array.from(str);
console.log(charArray); // Resultado: ['H', 'o', 'l', 'a', ' ', 'M', 'u', 'n', 'd', 'o']

const mySet = new Set([1, 2, 3, 4, 5]);
const setArray = Array.from(mySet);
console.log(setArray); // Resultado: [1, 2, 3, 4, 5]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomNumbers = Array.from({ length: 10 }, () => getRandomInt(1, 100));
  console.log(randomNumbers); // Resultado: Array de 10 números aleatorios entre 1 y 100

