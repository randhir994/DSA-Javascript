function solve(candidates, target, output, temp, index) {
  if (target === 0) {
    output.push(temp);
    return;
  }

  if (target < 0 || index >= candidates.length) {
    return;
  }

  solve(candidates, target, output, temp, index + 1);

  temp.push(candidates[index]);
  solve(candidates, target - candidates[index], output, temp, index);
  temp.pop();

  return output;
}

const combinationSum = function (candidates, target) {
  let output = [];
  let temp = [];
  return solve(candidates, target, output, temp, 0);
};

console.log(combinationSum1([2, 3, 6, 7], 7));
