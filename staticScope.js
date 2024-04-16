function outer() {
    let animal = "barn owl";
    function printAnimal() {
      console.log(animal); // Imprime "barn owl"
    }
    function alsoPrintAnimal() {
      let animal = "burrowing owl";
      printAnimal(); // Imprime "barn owl" debido al alcance léxico
    }
    alsoPrintAnimal();
  }
  
  outer();

  function outerA() {
    let age = 10;
    if (true) {
      let age = 20;
      console.log(age); // Imprime 20
    }
    console.log(age); // Imprime 10
  }
  
  outerA();