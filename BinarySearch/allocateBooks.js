//https://www.codingninjas.com/studio/problems/allocate-books_1090540

function isPossibleToAllocate(arr,m,target){
    let studenCount = 1;
    let pageSum = 0;

    for(let item of arr){

        if(pageSum + item <=target){
            pageSum+=item;
        }else{
            studenCount++;
            if(pageSum>)
        }
    }
}

function allocateBooks(arr, m) {
    let s = 0;

    let e = arr.reduce((acc, item) => (acc += item), 0);

    let mid = parseInt((s + e) / 2);
    let ans = -1;

    while (s < e) {
        if (isPossibleToAllocate()) {
            ans = mid;
            s = mid + 1;
        } else {
            e = mid - 1;
        }
    }

    return ans;
}

console.log(allocateBooks([12, 34, 67, 90], 2));
