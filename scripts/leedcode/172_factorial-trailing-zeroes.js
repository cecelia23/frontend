var trailingZeroes = function(n) {
    let res = 0;
    // for (let i = 1; i <= n; i++) {
    //   let tmp = i;
    //   while (tmp % 5 === 0) {
    //     res += 1;
    //     tmp = tmp / 5;
    //   }
    // }
    let k = 5;
    while (n >= k) {
      let temp = parseInt(n / k);
      res += temp;
      k = k * 5;
    }
    return res;
};

let num = 165;
console.log(trailingZeroes(num));