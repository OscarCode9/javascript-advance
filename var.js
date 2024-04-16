

// Con var
var a = 1;
console.log(a); // 1
a = 2;
console.log(a); // 2

// Con let
let b = 3;
console.log(b); // 3
b = 4;
console.log(b); // 4

// Con const (no se puede reasignar)
try {
  const c = 5;
  console.log(c); // 5
  c = 6; // Error: no se puede reasignar una constante
} catch (error) {
  console.log(error);
}

// Bloque de código con var
function exampleVar() {
  if (true) {
    var x = "Hola";
  }
  console.log(x); // Hola
}
exampleVar();

// Bloque de código con let
function exampleLet() {
  if (true) {
    let y = "Hola";
  }
  console.log(y); // Error: y no está definido
}
try {
  exampleLet();
} catch (error) {
  console.log(error);
}

// Objeto constante
const person = {
    name: "Juan",
    age: 30
};
console.log(person.name); // Juan
person.age = 31; // Se puede modificar las propiedades del objeto
console.log(person.age); // 31

// Arreglo constante
const numbers = [1, 2, 3];
console.log(numbers[0]); // 1
numbers.push(4); // Se puede agregar elementos al arreglo
console.log(numbers); // [1, 2, 3, 4]

var globalVar = 'global'; // Se añade a global
let localVar = 'local'; // No se añade a global

console.log(global); // 'global'
console.log(global.localVar); // undefined

function testScope() {
    if (true) {
      let localVar = 'inside block';
      const constVar = 'also inside block';
      console.log(localVar); // 'inside block'
      console.log(constVar); // 'also inside block'
    }
    // No se puede acceder a localVar y constVar aquí
    console.log(localVar); // Error: localVar is not defined
    console.log(constVar); // Error: constVar is not defined
  }
  testScope();

  // Ámbito de bloque con let y const
function testScope() {
    if (true) {
      let localVar = 'inside block';
      const constVar = 'also inside block';
      console.log(localVar); // 'inside block'
      console.log(constVar); // 'also inside block'
    }
    // No se puede acceder a localVar y constVar aquí
    console.log(localVar); // Error: localVar is not defined
    console.log(constVar); // Error: constVar is not defined
  }
  testScope();

  