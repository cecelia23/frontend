var profix = function(prices,fee) {
    let buy = 0 - prices[0];
    let sold = 0;
    let buy_cur,no_cur;
    for (let i=1;i<prices.length;i++) {
        buy_temp = buy;
        sold_temp = sold;
        buy = Math.max(buy_temp,sold_temp-prices[i]);
        sold = Math.max(buy_temp+prices[i]-fee,sold_temp);  
    }
    return sold;
}
let prices = [1,3,2,8,4,9];
let fee = 2;
let res = profix(prices,fee);
console.log(res);