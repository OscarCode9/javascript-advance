function startCountdown(seconds) {
  let secondsRemaining = seconds;

  // Mostrar el valor inicial inmediatamente
  console.log(secondsRemaining);

  const intervalId = setInterval(() => {
    secondsRemaining--;
    console.log(secondsRemaining);

    // Detener el intervalo cuando llega a cero
    if (secondsRemaining === 0) {
      clearInterval(intervalId);
      // Opcional: realizar acciones adicionales al finalizar la cuenta regresiva
    }
  }, 1000); // 1000 milisegundos = 1 segundo
}

// Iniciar la cuenta regresiva desde 10 segundos
startCountdown(10);

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").innerText = timeString;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

let position = 0;

function moveElement() {
  const element = document.getElementById("animated-element");
  position += 10; // Mover 10 píxeles a la derecha
  element.style.left = position + "px";
}

// Mover el elemento cada 100 milisegundos
setInterval(moveElement, 100);

function loadData() {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => {
        // Actualizar la página con los nuevos datos
      });
  }
  
  // Cargar datos cada 5 minutos
  setInterval(loadData, 5 * 60 * 1000);

  function checkConnection() {
    fetch("https://www.google.com/", { mode: "no-cors" })
      .then(() => {
        console.log("Conectado a internet");
      })
      .catch(() => {
        console.log("Sin conexión a internet");
      });
  }
  
  // Verificar la conexión cada 30 segundos
  setInterval(checkConnection, 30 * 1000);

  const audio = new Audio("sound.mp3");

function playSound() {
  audio.play();
}

// Reproducir el sonido cada 10 segundos
setInterval(playSound, 10 * 1000);
