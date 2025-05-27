/* Given a whole number N, find its square root. In case the square root is not a whole number, you can print the largest whole number less than calculated value.
Example:
N = 17
Square Root: 4.12
Required Output: 4 */

/* function solve(n){
let root=0;
if(n==1){
  return 1;
  
}

for(let i=0;i<Math.ceil(n/2);i++)

if(i*i<n){
  root=i;
}else{
  break;
}

return root;
} */

function solve(target) {
  let start = 0;
  let end = Math.ceil(target / 2);
  let root = 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (target > mid * mid) {
      root = mid;
    }
    console.log(mid, start, end, root);

    end = mid;
  }
  return root;
}

console.log(solve(17, 0, Math.ceil(17 / 2)));
/* console.log(solve(1,0,Math.ceil(1/2)))
  console.log(solve(26,0,Math.ceil(26/2))) */
