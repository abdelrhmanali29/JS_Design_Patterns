// function car(model, year, price) {
//   this.model = model;
//   this.year = year;
//   this.price = price;

//   this.getCarData = () => {
//     return `Car is ${this.model} has manfactured at ${this.year} with ${this.price} dollar`;
//   };

//   this.buyCar = () => {
//     return `You bought ${this.model}`;
//   };
// }

// const bmw = new car('BMW', 2002, 10000);
// const royes = new car('RR', 2010, 100000);

// console.log(bmw.getCarData());
// console.log(royes.getCarData());

// use constructor pattern

function car(model, year, price) {
  this.model = model;
  this.year = year;
  this.price = price;
}

car.prototype.getCarData = function () {
  return `Car is ${this.model} has manfactured at ${this.year} with ${this.price} dollar`;
};

car.prototype.buyCar = function () {
  return `You bought ${this.model}`;
};

const opel = new car('Opel', 2002, 10000);
const toyota = new car('Toyota', 2010, 100000);

console.log(opel.getCarData());
console.log(toyota.getCarData());
