//Map
const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

console.log(arr.map((item) => item * 2));

console.log(arr.myMap((item) => item * 2));

//Filter

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

console.log(arr.filter((item) => item % 2 === 0));

console.log(arr.myFilter((item) => item % 2 === 0));

//Reduce

Array.prototype.myReduce = function (cb, acc) {
  for (let i = 0; i < this.length; i++) {
    if (acc) {
      acc = cb(acc, this[i]);
    } else {
      acc = this[i];
    }
  }
  return acc;
};

console.log(arr.reduce((acc, item) => item + acc, 0));
console.log(arr.myReduce((acc, item) => item + acc, 0));

console.log(arr.reduce((acc, item) => item + acc));
console.log(arr.myReduce((acc, item) => item + acc));
