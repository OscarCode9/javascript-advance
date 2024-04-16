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
  
  (async () => {
    const allPokemons = [];
    for (let i = 1; i <= 50; i++) {
      allPokemons.push(fetchPokemon(i));
    }
    const results = await Promise.allSettled(allPokemons);
    console.log(results);
  })();

  for (var i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}