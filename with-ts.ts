function add(a, b) {
  return a + b;
}
var result = add(2, 5);
console.log(result);

let person: {
  name: string;
  age: Number;
};

let people: {
  name: string;
  age: Number;
}[];

person = {
  name: "max",
  age: 18,
};
console.log(person);

const obj1 = {
  a: 10,
  b: 20,
};
console.log(obj1);
const obj2 = {
  ...obj1,
  a: 30,
};

console.log(obj2);

type Person = {
  name: string;
  age: Number;
};

let unaPersona: Person = {
  name: "max",
  age: 18,
};

let gente: Person[] = [unaPersona];
console.log(gente);

export default gente;
