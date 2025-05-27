function solve(candidates, target, output, temp, index) {
  if (target === 0) {
    output.push(temp);
    console.log(output);
    return;
  }

  if (target < 0 || index >= candidates.length) return;

  for (let i = index; i < candidates.length; i++) {
    if (i > index && candidates[i] === candidates[i - 1]) {
      continue;
    }

    if (candidates[i] > target) break;

    temp.push(candidates[i]);
    solve(candidates, target - candidates[i], output, temp, i + 1);
    temp.pop();
  }

  return output;
}

var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  let output = [];
  let temp = [];

  return solve(candidates, target, output, temp, 0);
};
