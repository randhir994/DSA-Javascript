//https://www.codingninjas.com/studio/problems/count-ways-to-reach-nth-stairs_798650?
function countWaysReachNStairs(n) {
    if (n < 0) return 0;
    if (n === 0) return 1;

    return countWaysReachNStairs(n - 1) + countWaysReachNStairs(n - 2);
}

console.log(countWaysReachNStairs(4));
console.log(countWaysReachNStairs(5));
