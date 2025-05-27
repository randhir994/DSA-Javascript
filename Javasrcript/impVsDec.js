//Imperative code

const x = 5;
const xSquare = x * x;
let isEven;

if (xSquare % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

console.log(isEven);

//Decalarive Code

const isSquareEven = (x) => ((x * x) / 2 === 0 ? true : false);
console.log(isSquareEven(5));

const person1 = {
  name: "Adam",
  age: 25,
};

const person2 = person1;//=>Code mutated to fix it use Object.assign or Spread Operator
const person3 = Object.assign({},person1);
const person4 = {...person1};
person2.name = "strve";

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
