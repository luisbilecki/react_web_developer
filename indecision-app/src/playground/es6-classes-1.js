class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name || 'test';
    this.age = age;
  }

  getGreeting() {
   // return 'Hi, I am ' + this.name + '!';
   return `Hi, I am ${ this.name }!`;
  }

  getDescription(){
    if (this.age)
      return `${ this.name } is ${ this.age } year(s) old!`;
    else
      return `Ops, we don't know ${ this.name } age!`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);

    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Person('Luis', 24);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());

const meStudent = new Student('Felipão', 24, undefined);
console.log(meStudent.getGreeting());
console.log(meStudent.getDescription());

const meTraveler = new Traveler('Felipão', 24, 'New York, NY');
console.log(meTraveler.getGreeting());
