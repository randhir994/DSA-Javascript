// some project questions

// // Async and defer
// // Assume all of the scripts are external.
<head>
  <script>
    console.log("A");
  <script>
  <script>
    console.log("B");
  <script>
  <script>
    console.log("C");
  <script>
</head>
<body>
  // somewhere in some tag
  console.log("D");
</body>

// // All are async
// {/* A.js 1 KB */}
// {/* B.js is 1KB
//     C.js is 1KB */}

//  //A B C D- async

//  // All are defer
//  //  A B C D

//  // Async
//  {/* A.js 3 MB */}
// {/* B.js is 5MB
//     C.js is 2MB */}
// //

// console.log("A");
// const a = new Promise((res, rej) => {
//   console.log("B");
//   res(10);
//   console.log("C");
//   res(20);
// });

// console.log("D");

// setTimeout(() => {
//   console.log("E");
// });

// a.then((val) => {
//   console.log("F", val);
// }).then(() => {
//   console.log("H", val);
// });

// a.then((val) => {
//   console.log("G", val);
// });
// console.log("I");

// A B C D I F H G E

// function sum(...args1) {
//   let temp = args1.reduce((acc, item) => acc + item, 0);
//   return function (...args2) {
//     if (args2.length === 0) {
//       return temp;
//     } else {
//       return sum(temp, ...args2);
//     }
//   };
// }

// const a = sum(1, 2, 3)();
// const b = sum(1, 2, 3)(4, 5, 6)();
// const c = sum(1, 2, 3)(4, 5, 6)(7)();
// const d = sum(1, 2, 3)(4, 5, 6)(7);
// const e = d(8);
// const f = d(8)(9)();

// console.log(a); // 6
// console.log(b); // 21
// console.log(c); // 28
// console.log(e()); // 36
// console.log(f); // 37
// const timerObj = {};
// timerObj.timer = setTimeout(() => console.log("setTimeout"), 1000);

// setTimeout(() => myClearTimeout(timerObj.timer), 100);

// function myClearTimeout(timerObj) {
//   console.log(timerObj.timer);
//   delete timerObj.timer;
// }

// const a = setTimeout(() => console.log("setTimeout"), 1000);

