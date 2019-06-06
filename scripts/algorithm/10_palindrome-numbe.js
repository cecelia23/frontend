var isPalindrome = function(x) {
    let str = x.toString();
    let length = str.length;
    let res;
    for (let i = length - 1; i >= 0; i--) {
        if (res === undefined) {
            res = str[i];
        } else {
            res += str[i];
        }
    }
    if ( str === res) {
        return true;
    } else {
        return false;
    }
};

let num = isPalindrome(10);
console.log(num);