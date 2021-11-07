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

car.prototype.getByModel = function () {
  const _carCrud = carCrud();

  console.log(_carCrud.getByModel(this.model));
};

const carCrud = () => {
  getPrivateFunc = () => {
    return 'this is private function';
  };

  getByModel = (model) => {
    return `we get all cars with model ${model}`;
  };

  return {
    getByModel,
  };
};

const opel = new car('Opel', 2002, 10000);
const toyota = new car('Toyota', 2010, 100000);

console.log(opel.getByModel());
console.log(toyota.getCarData());
