// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {});

console.log(__dirname, __filename);

// Wraps All this
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}
module.exports = Person;
// Wraps To Here
