//https://practice.geeksforgeeks.org/problems/first-repeating-element4018/1
function firstRepeated(arr, n) {
    // your code here
    let map = {};
    
    for(let i =0;i<arr.length;i++){
        map[arr[i]] = map[arr[i]] + 1 || 1;
        console.log(map);

    }

        
    for(let i =0;i<arr.length;i++){
        if(map[arr[i]] > 1){
            return arr[i+1];
        }
    }
    
    return -1;
}

console.log(firstRepeated([1, 5, 3, 4, 3, 5, 6]));