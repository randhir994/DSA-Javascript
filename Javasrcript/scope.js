//Question:

// console.log("line number 1", varname);
// var varname = 10;

// console.log("line number 7", varname);
// const b = () => {
//   console.log("line number 5", varname);
// };
// const fn = () => {
//   console.log("line number 9", varname);
//   var varname = 20;

//   b();
//   console.log("line number 13", varname);
// };

// fn();

//Output:
// line number 1 undefined

// line number 7 10

// line number 9 undefined

// line number 5 20 ==> Wrong ==>line number 5 10

// line number 13 20

//Question:

hello();
function hello() {
  console.log("1");
}
function hello() {
  console.log("2");
}
hello();
function hello() {
  console.log("3");
}

//Output:
//3
//3

//Question:

var a = 10;
console.log("line number 2", a);
const fn = () => {
  console.log("line number 4", a);
  var a = 20;
  a++;
  console.log("line number 7", a);

  if (a) {
    var a = 30;
    a++;
    console.log("line number 11", a);
  }

  console.log("line number 13", a);
};
fn();
console.log("line number 2", a);

// output:

// line number 2 10
// line number 4 undefined
// line number 7 21
// line number 11 31
// line number 13 31
// line number 2 10

// Question:

let letFruit = "orange";
var varFruit = "orange";
console.log("letFruit", letFruit, "varFruit", varFruit);

{
  let letFruit = "apple";
  var varFruit = "apple";
  console.log("letFruit", letFruit, "varFruit", varFruit);
}

console.log("letFruit", letFruit, "varFruit", varFruit);


// output:

// letFruit orange varFruit orange
// letFruit apple varFruit apple
// letFruit orange varFruit apple

