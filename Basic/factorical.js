function factorial(n){
    //decalare bigInt dataType
    let result = 1n;

    for(let i=1n;i<=n;i++){
        result = result * i
    }

    return result;
}

console.log(factorial(5));
console.log(factorial(500));