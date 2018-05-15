class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name || 'test';
    this.age = age;
  }

  getGretting() {
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

const me = new Person('Luis', 24);
console.log(me.getGretting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGretting());
console.log(me.getDescription());