let age = 20; // Variable global

function outer() {
  console.log(age); // Imprime 20
  let tem = age; // Variable local
  tem = 30;
  console.log(tem); // Imprime 30
}

outer();
console.log(age); // Imprime 20


function outer() {
    let age = 10;
    if (true) {
      let age = 20;
      console.log(age); // Imprime 20
    }
    console.log(age); // Imprime 10
  }
  
  outer();

  function outer() {
    let age = 300;
    function inner() {
      let age = 400;
      function superInner() {
        console.log(age); // Imprime 20
      }
      superInner();
    }
    inner();
  }
  
  outer();

  function outer() {
    let age = 10;
    function inner() {
      age = 20; // Modifica la variable 'age' de la función 'outer'
    }
    inner();
    console.log(age); // Imprime 20
  }
  
  outer();


let ageA = 10; // Variable global

function outer() {
  let ageA = 20; // Variable local
  console.log(ageA); // Imprime 20
}

outer();
console.log(ageA); // Imprime 10

function outer() {
    let age = 10;
    function inner() {
      return age; // Accede a la variable 'age' de la función 'outer'
    }
    return inner;
  }
  
  const innerFunction = outer();
  console.log(innerFunction()); // Imprime 10
  
  function outer() {
    let age = 10;
    function inner() {
      return age++; // Modifica y devuelve la variable 'age' de la función 'outer'
    }
    return inner;
  }
  
  const innerFunctionA = outer();
  console.log(innerFunctionA()); // Imprime 10
  console.log(innerFunctionA()); // Imprime 11
  console.log(innerFunctionA()); // Imprime 12