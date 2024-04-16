const { parentPort, workerData } = require('worker_threads');

const fetchPokemon = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    return null;
  }
};

// Escucha los mensajes del hilo principal
parentPort.on('message', async (id) => {
  const pokemon = await fetchPokemon(id);
  parentPort.postMessage(pokemon);
});

