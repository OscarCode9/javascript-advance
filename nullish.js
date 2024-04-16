const user = {
  name: "Juan",
  age: null,
};

const userName = user.name ?? "Usuario Anónimo"; // Juan
const userAge = user.age ?? 25; // 25 (valor predeterminado)

const value1 = 0;
const value2 = undefined;

console.log(value1 || "Valor predeterminado"); // Valor predeterminado (0 es falsy)
console.log(value2 || "Valor predeterminado"); // Valor predeterminado (undefined es falsy)

console.log(value1 ?? "Valor predeterminado"); // 0 (0 no es null ni undefined)
console.log(value2 ?? "Valor predeterminado"); // Valor predeterminado (undefined es considerado falsy)

const user2 = {
  name: {
    first: null,
    last: undefined,
  },
  age: undefined,
};

const fullName = user2.name?.first ?? "Anónimo" + " " + (user2.name?.last ?? ""); // Juan
console.log(fullName);
const userAge2 = user2.age ?? 30; // 30 (valor predeterminado)
