function User(name, isAdmin, email) {
  this.name = name;
  this.isAdmin = false;
  this.email = email;
}

let user = new User("John", true, "oscar");
console.log(user);

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function diagonalDifference(arr) {
  let arrSize = arr.length - 1;

  let arrSizeTemp = 0;
  let primaryDiagonal = 0;
  let secondDiagonal = 0;

  for (let row = 0; row < arr.length; row++) {
    primaryDiagonal = primaryDiagonal + arr[arrSizeTemp][row];
    secondDiagonal = secondDiagonal + arr[row][arrSize];
    arrSize--;
    arrSizeTemp++;
  }
  return primaryDiagonal - secondDiagonal ;
}

let matriz = [
  [6, 6, 7, -10, 9, -3, 8, 9, -1],
  [9, 7, -10, 6, 4, 1, 6, 1, 1],
  [-1, -2, 4, -6, 1, -4, -6, 3, 9],
  [-8, 7, 6, -1, -6, -6, 6, -7, 2],
  [-10, -4, 9, 1, -7, 8, -5, 3, -5],
  [-8, -3, -4, 2, -3, 7, -5, 1, -5],
  [-2, -7, -4, 8, 3, -1, 8, 2, 3],
  [-3, 4, 6, -7, -7, -8, -3, 9, -6],
  [-2, 0, 5, 4, 4, 4, -3, 3, 0],
];

console.log(diagonalDifference(matriz));
