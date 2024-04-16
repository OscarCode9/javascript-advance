const user = {
    name: {
      first: 'John',
      last: 'Doe'
    },
    address: {
      city: 'New York',
      country: 'USA'
    }
  };
  
  // Sin optional chaining
  const cityA = user.address.city; // Si address es null o undefined, esto lanzará un error
  
  // Con optional chaining
  const city = user.address?.city; // Si address es null o undefined, city será undefined

  console.log(city, cityA);

  const user1 = {
    name: 'John',
    greet: function() {
      return `Hello, ${this.name}!`;
    }
  };
  
  // Sin optional chaining
  const greeting1 = user1.greet(); // Si greet no está definido en user, esto lanzará un error
  
  // Con optional chaining
  const greeting = user1.greet?.(); // Si greet no está definido en user, greeting será undefined

  const user2 = {
    address: {
      coordinates: {
        latitude: 40.7128,
        longitude: -74.0060
      }
    }
  };
  
  // Sin optional chaining
  const latitude2 = user2.address.coordinates.latitude; // Si alguno de los niveles es null o undefined, esto lanzará un error
  
  // Con optional chaining
  const latitude = user2.address?.coordinates?.latitude; // Si alguno de los niveles es null o undefined, latitude será undefined


  const user3= {
    name: {
      first: 'Juan',
      last: 'Pérez'
    },
    address: {
      street: 'Calle Falsa 123',
      city: 'Ciudad',
      coordinates: {
        lat: 40.712776,
        lng: -74.005974
      }
    },
    greet() {
      console.log(`¡Hola, soy ${this.name.first} ${this.name.last}!`);
    }
  };
  
  // Acceso a propiedades anidadas sin encadenamiento opcional
  console.log(user3.name && user3.name.first); // 'Juan'
  console.log(user3.job && user3.job.title); // undefined (sin error)
  
  // Acceso a propiedades anidadas con encadenamiento opcional
  console.log(user3.name?.first); // 'Juan'
  console.log(user3.job?.title); // undefined (sin error)
  
  // Acceso a métodos con encadenamiento opcional
  user3.greet?.(); // '¡Hola, soy Juan Pérez!'
  user3.saybye?.(); // undefined (sin error)
  
  // Encadenamiento anidado
  console.log(user3.address?.coordinates?.lng); // -74.005974