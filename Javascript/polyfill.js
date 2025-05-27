const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this));
    }

    return result;
};

Array.prototype.myFilter = function (cb) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};

Array.prototype.myReduce = function (cb, initialValue) {
    let acc = initialValue;

    for (let i = 0; i < this.length; i++) {
        if (acc) {
            acc = cb(acc, this[i], i, this);
        } else {
            acc = this[i];
        }
    }

    return acc;
};

console.log(arr.map((item) => item * 2));
console.log(arr.myMap((item) => item * 2));

console.log(arr.filter((item) => item > 2));
console.log(arr.myFilter((item) => item > 2));

console.log(arr.reduce((acc, item) => (acc += item), 0));
console.log(arr.myReduce((acc, item) => (acc += item), 0));

// console.log(arr.reduce((acc, item) => (acc += item)));
// console.log(arr.myReduce((acc, item) => (acc += item)));
