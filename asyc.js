async function main() {
//   const fetchUser = (id) =>
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json());

//   const ids = [1, 2, 3, 4, 5, "test"];

//   try {
//     const result = await Promise.allSettled(ids.map(fetchUser));
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }

  //   Promise.all(ids.map(fetchUser))
  //     .then((pokemon) => {
  //       console.log(pokemon);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  const getPokemonName = (id) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => data.name);
  const getPokemonImage = (id) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/sprites`)
      .then((res) => res.json())
      .then((data) => data.front_default);

  const id = 4;

  Promise.race([getPokemonName(id), getPokemonImage(id)]).then((result) => {
    if (typeof result === "string") {
        console.log(result);
      } else {
        console.log(result)
      }
  });

  console.log(100);
}
main();
