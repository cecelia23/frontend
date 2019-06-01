var climbStairs = function(n) {
    let times = n / 2;
    let res = 1;
    for (let i = 1; i <= times; i++) {
      let t1 = n - 2 * i;
      let sum = t1 + i;
      let min;
      if (t1 > 0) {
        min = Math.min(t1, i);
      } else {
        min = i;
      }
      let cmin = 1;
      let divide = 1;
      for (let i = 0; i < min; i++) {
        cmin *= (sum - i);
        divide *= (min - i);
      }
      let c = cmin / divide;
      res += c;
    }
    return res
    // console.log(res);
};
let res = climbStairs(3);
console.log(res);
