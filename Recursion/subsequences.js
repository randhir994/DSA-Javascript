function subsequences(str, output, ans, index) {
    if (index > str.length - 1) {
        if (output.length) {
            ans.push(output);
        }

        return;
    }

    //exclude
    subsequences(str, output, ans, index + 1);

    //include
    subsequences(str, output + str[index], ans, index + 1);
    return ans;
}

console.log(subsequences("abc", "", [], 0));
