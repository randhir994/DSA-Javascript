function solve(k, n, output, temp, num) {
  if (k === 0 && n === 0) {
    output.push(temp);
    console.log(output);
    return;
  }

  for (let i = num; i < 10; i++) {
    temp.push(i);
    solve(k - 1, n - i, output, temp, i + 1);
    temp.pop();
  }

  return output;
}

var combinationSum3 = function (k, n) {
  let output = [];
  let temp = [];

  return solve(k, n, output, temp, 1);
};
