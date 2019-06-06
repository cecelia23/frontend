var reverse = function(x) {
    if (x === 0){
        return 0;
    }
    let tag = 0;
    if (x < 0) {
        tag = 1;
        x = -x;
    }
    let str = x.toString();
    let res;
    let length = str.length;
    for (let i = length - 1; i >= 0; i--) {
        if (str[i] === '0' && res === undefined) {
            continue;
        }
        if (str[i] !== '0' && res === undefined) {
            res = str[i];
        } else {
            res += str[i];
        }
    }
    res = parseInt(res);
    if (tag === 1) {
        res = -res;
    }
    if (res < -Math.pow(2, 31) || res > Math.pow(2, 31) - 1) {
        return 0;
    }
    // console.log(res);
    return res;
};

let num = reverse(1534236469);
console.log(num);
