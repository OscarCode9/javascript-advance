function normalFunction() {
  console.log(this);
}

normalFunction(); // Imprime el objeto global (window o global)

let obj = {
  method: normalFunction,
};

obj.method(); // Imprime el objeto obj

let arrowFunction = () => {
  console.log(this);
  const arrowFunctionB = () => {
    console.log(this);
  };
  return arrowFunctionB;
};


arrowFunction()(); // Imprime el objeto global (window o global)

let objA = {
  method: arrowFunction,
};

objA.method(); // Todavía imprime el objeto global, no obj

let objBB = {
  method: function () {
    console.log(this);
  },
  name: "objBB",
};

objBB.method(); // Imprime el objeto obj

