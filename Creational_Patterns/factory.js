function developer(name) {
  this.name = name;
  this.type = 'developer';
}

function tester(name) {
  this.name = name;
  this.type = 'tester';
}

function EmployeeFactor() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new developer(name);
      case 2:
        return new tester(name);
      default:
        break;
    }
  };
}

function say() {
  console.log(`I am ${this.name} and I am a ${this.type}`);
}

const employeeFactor = new EmployeeFactor();

say.call(employeeFactor.create('abdo', 1));
say.call(employeeFactor.create('omar', 2));
