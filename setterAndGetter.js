class Circle {
    constructor(radius) {
      this.radius = radius; // The constructor sets the initial value of the radius property
    }
  
    // Getter method for retrieving the radius
    get circumference() {
      return 2 * Math.PI * this.radius;
    }
  
    // Setter method for updating the radius
    set diameter(newDiameter) {
      this.radius = newDiameter / 2;
    }
  }
  
  // Create a new circle instance
  const myCircle = new Circle(5);
  
  // Accessing the circumference using the getter method
  console.log("Circumference:", myCircle.circumference); // Output: Circumference: 31.41592653589793
  
  // Updating the diameter using the setter method
  myCircle.diameter = 10;
  
  // Accessing the updated circumference
  console.log("Updated Circumference:", myCircle.circumference); // Output: Updated Circumference: 31.4159265358979


  class Wallet {
    constructor(money) {
      this._money = money;
    }
  
    get money() {
      return this._money;
    }
  
    set money(value) {
      if (value < 0) {
        console.log("You can't have debt");
        return;
      }
      this._money = value;
    }
  }

  const myWallet = new Wallet(100);
  console.log(myWallet.money); // Output: 100
  myWallet.money = 50;
  console.log(myWallet.money); // Output: 50
  myWallet.money = -50; // Output: You can't have debt
  console.log(myWallet.money); // Output: 50


  // implement Circle class with radius, set and get and olso colors 
  class CircleTwo {
    constructor(radius, color) {
      this._radius = radius;
      this._color = color;
    }
  
    get radius() {
      return this._radius;
    }
  
    set radius(value) {
      this._radius = value;
    }
  
    get color() {
      return this._color;
    }
  
    set color(value) {
      this._color = value;
    }
  }

  const myCircleA = new CircleTwo(5, "red");
  console.log(myCircleA.radius); // Output: 5