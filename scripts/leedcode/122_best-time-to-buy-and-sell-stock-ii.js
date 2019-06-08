var maxProfit = function(prices) {
  let profix = 0;
  let prev;
  let tag = 0;
  for (let i = 0; i < prices.length; i++) {
    // 是否已买入
    if (tag === 1 && prices[i] > prev) {
      // 可以卖
      if ((i !== prices.length - 1 && prices[i+1] < prices[i]) || i === prices.length - 1) {
        let diff = prices[i] - prev;
        profix += diff;
        // console.log(profix);
        prev = 0;
        tag = 0;
      }
    } else {
      // 买入
      prev = prices[i];
      tag = 1;
    }
  }
  return profix;
};

let res = maxProfit([7,6,4,3,1]);
console.log(res);