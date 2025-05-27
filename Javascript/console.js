// // function sum(a) {
// //     let result = a;
// //     return function inner(b) {
// //         console.log(b);
// //         if (b) {
// //             result += sum(b);

// //         } else {
// //             return result;
// //         }
// //     };
// // }
// // console.log(sum(2)(3)( ));

// // var a = {},
// //     b = { key: "b" },
// //     c = { key: "c" };

// // a[b] = 123;
// // a[c] = 456;

// // console.log(a[b]);

// // console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));

// // for (var i = 0; i < 5; i++) {
// // 	setTimeout(function() { console.log(i); }, i * 1000 );
// // }

// // function parent(){
// //     this.a="a";
// // }

// // function child(){
// //     parent.call(this)
// //     this.b="b"
// // }

















// // child.prototype = Object.create(parent.prototype);
// // child.prototype.constructor = child;

// // const child1 = new child();

// // console.log(child1.b)


// var obj = {
//     a: [1,2,3],
//     b: function() {
//       console.log(this);
//       let self = this
//       this.a.forEach(function() {
//           console.log(this);
//       })
//     }
//   }
  
// //   obj.b();
//   const abc = obj.b();
// //   abc();