var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return '';
    }
    if (strs[0] === '') {
        return '';
    }
    let res = '';
    for (let i = 0; i < strs[0].length; i++) {
        res += strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                res = res.slice(0, i);
                return res;
            }
        }
    }
};

let res = longestCommonPrefix([""]);
console.log(res);