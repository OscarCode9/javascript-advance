const { Worker } = require("worker_threads");

// Crea una nueva instancia de worker
const fetchWorker = new Worker("./workers/fetchWorker.js");

const total = 50;
// Maneja los mensajes enviados por el worker
fetchWorker.on("message", (pokemon) => {
  console.log(pokemon);
  if (pokemon.id === total) {
    process.exit();
  }
});

// Envía los IDs de los pokemones al worker
for (let i = 1; i <= total; i++) {
  fetchWorker.postMessage(i);
}

