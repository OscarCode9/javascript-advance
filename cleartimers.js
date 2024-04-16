const delayedMessage = setTimeout(() => {
    console.log("Este mensaje se mostrará después de 3 segundos...");
  }, 3000);
  
  // Cancelar la tarea después de 1 segundo
  setTimeout(() => {
    clearTimeout(delayedMessage);
    console.log("Tarea cancelada!");
  }, 1000);

  function mockRequest(data, timeout) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => reject(new Error("Tiempo de espera agotado")), timeout);
  
      // Simular procesamiento asíncrono
      setTimeout(() => {
        clearTimeout(timeoutId);
        resolve({ data });
      }, Math.random() * 8000);
    });
  }
  
  mockRequest({ message: "Datos de la solicitud" }, 1000)
    .then(console.log)
    .catch(console.error);


    const intervalId = setInterval(() => {
        console.log("Este mensaje se mostrará cada segundo...");
      }, 1000);
      
      setTimeout(() => {
        clearInterval(intervalId);
        console.log("Intervalo detenido!");
      }, 5000);


      function startClock() {
        let seconds = 0;
        const intervalId = setInterval(() => {
          seconds++;
          console.log("Segundos transcurridos:", seconds);
        }, 1000);
        return intervalId;
      }
      
      const clockIntervalId = startClock();
      
      // Detener el reloj después de 10 segundos
      setTimeout(() => {
        clearInterval(clockIntervalId);
      }, 10000);

      const frames = ["-", "\\", "|", "/"];
let currentFrame = 0;

const intervalIdA = setInterval(() => {
  process.stdout.write(`\r${frames[currentFrame]}`);
  currentFrame = (currentFrame + 1) % frames.length;
}, 200);

// Detener la animación después de 5 segundos
setTimeout(() => {
  clearInterval(intervalIdA);
  process.stdout.write("\n");
}, 5000);

function updateData() {
    // Simular la obtención de datos actualizados
    const newData = { value: Math.random() };
    console.log("Datos actualizados:", newData);
  }
  
  const intervalIdAA = setInterval(updateData, 2000);
  
  // Detener las actualizaciones después de 10 segundos
  setTimeout(() => {
    clearInterval(intervalIdAA);
  }, 10000);


  const searchInput = document.getElementById("search");
let debounceTimeout;

const mockAPIRequest = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simular respuesta de la API
      const results = [
        `Resultado 1 para ${query}`,
        `Resultado 2 para ${query}`,
        `Resultado 3 para ${query}`,
      ];
      resolve(results);
    }, 1000); // Simular tiempo de respuesta de 1 segundo
  });
};

const handleSearchInput = async (event) => {
  const query = event.target.value;

  clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(async () => {
    try {
      const results = await mockAPIRequest(query);
      // Actualizar la interfaz de usuario con los resultados
      console.log("Resultados de la búsqueda:", results);
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  }, 400); // Tiempo de espera del debounce
};

searchInput.addEventListener("input", handleSearchInput);