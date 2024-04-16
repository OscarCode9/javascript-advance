function throttle(func, delay) {
  let lastCallTime = 0;

  return function (...args) {
    const currentTime = new Date().getTime();
    console.log(currentTime - lastCallTime);
    if (currentTime - lastCallTime >= delay) {
      func.apply(this, args);
      lastCallTime = currentTime;
      console.log(lastCallTime);
    }
  };
}

// Ejemplo de función que queremos llamar con throttling
function processInput(input) {
  console.log("Procesando entrada:", input);
}

// Crear una versión throttled de la función processInput
const throttledProcessInput = throttle(processInput, 1000); // Límite de llamadas cada 1000 milisegundos (1 segundo)

// Llamadas a la función throttledProcessInput

throttledProcessInput("Entrada 1"); // Se ejecutará

function throttle(callback, delay = 500) {
    let isThrottled = false;
    let savedArgs = null;
  
    function executeCallback() {
      if (savedArgs === null) {
        isThrottled = false;
      } else {
        callback.apply(this, savedArgs);
        savedArgs = null;
        setTimeout(executeCallback, delay);
      }
    }
  
    return function(...args) {
      if (isThrottled) {
        savedArgs = args;
      } else {
        callback.apply(this, args);
        isThrottled = true;
        setTimeout(executeCallback, delay);
      }
    };
  }
  
  // Ejemplo de uso
  function loadMoreItems() {
    console.log("Cargando más elementos...");
  }
  
  const throttledLoadMoreItems = throttle(loadMoreItems, 300);
  
  // Llamar a la función throttledLoadMoreItems en respuesta a eventos de scroll
  window.addEventListener("scroll", throttledLoadMoreItems);
  