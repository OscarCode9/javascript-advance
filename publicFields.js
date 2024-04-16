
class Cat {
    static numOfCats = 0;
    constructor(name, age) {
      this._name = name;
      this._age = age;
      Cat.numOfCats++;
    }
}

const cat = new Cat("Fluffy", 2);
console.log(cat.numOfCats); // Output: undefined
console.log(Cat.numOfCats); // Output: 1
const cat2 = new Cat("Snowball", 3);
console.log(cat2.numOfCats); // Output: undefined
console.log(Cat.numOfCats); // Output: 2

