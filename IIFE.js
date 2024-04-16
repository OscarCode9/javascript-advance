// Ejemplo de IIFE
(function() {
    let secret = 10;
    console.log('Secret is:', secret);
  })();
  
  // Esto dará como resultado:
  // Secret is: 10
  
  console.log(secret); // Error: secret is not defined
  