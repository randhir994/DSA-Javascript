// function f2(arr) {
//   arr["1"] = 1;
//   console.log(arr);
// }
// function f1() {
//   let arr = {};
//   f2(arr);
//   console.log(arr);
// }

// f1();

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  function log() {
    let message = "count is" + count;

    console.log(message);
  }

  return [increment,log];
}

const [increment, log]= createIncrement();
increment();
increment();
increment();
log();
