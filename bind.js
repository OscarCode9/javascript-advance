function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`);
  }
  
  const aussieGreet = greet.bind(null, "Good day");
  aussieGreet("Elton"); // Output: Good day, Elton!
  
  const spitefulGreet = greet.bind(null, "I hate you");
  spitefulGreet("Blue"); // Output: I hate you, Blue!


  function partial(fn, ...args) {
    return function (...remainingArgs) {
      return fn.apply(this, args.concat(remainingArgs));
    };
  }
  
  const triple = num => num * 3;
  const partialTriple = partial(triple, 3);
  console.log(partialTriple(4)); // Output: 12