function documentA(buttonId) {
  return {
    getElementById: () => {
      return {
        addEventListener: (click, func) => {
          console.log(buttonId);
          return func();
        },
      };
    },
  };
}
function createButtonClickCounter(buttonId) {
  let count = 0; // Variable local para el contador

  // Selecciona el botón por su ID
  const doc = documentA(buttonId);
  const button = doc.getElementById();

  // Agrega un event listener al botón para contar los clics
  button.addEventListener("click", function () {
    count++; // Incrementa el contador cada vez que se hace clic en el botón
    console.log(`Botón ${buttonId} clickeado ${count} veces`);
  });
}

// Uso del closure para crear contadores individuales para diferentes botones
createButtonClickCounter("btn1");
createButtonClickCounter("btn2");
createButtonClickCounter("btn3");
