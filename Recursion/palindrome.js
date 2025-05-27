function palindrome(str, s, e) {
    if (s > e) return true;

    if (str[s] !== str[e]) {
        return false;
    } else {
        return palindrome(str, s + 1, e - 1);
    }
}

console.log(palindrome("abba", 0, 3));
console.log(palindrome("abbccbba", 0, 7));
