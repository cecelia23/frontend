// var maxProfit = function(prices) {
//     let res = 0;
//     let tag ;
//     for (let i = 0;i < prices.length - 1; i++) {
//         if (tag !== undefined) {
//             if (tag < prices[i]) {
//                 continue;
//             }
//         }
//         for (let j = i + 1; j < prices.length; j++){
            
//             if (prices[j] <= prices[i]){
//                 continue;
//             } else {
//                 let diff = prices[j] - prices[i];
//                 // res = diff > res ? diff : res;
//                 if (diff > res) {
//                     tag = prices[i];
//                     res = diff;
//                 }
//             }
//         } 
//     }
//     return res;
// };
var maxProfit = function(prices) {
    let max_profix = 0, min_price = prices[0];
    for (let i of prices) {
        min_price = Math.min(i, min_price);
        // 得到负值时取0
        max_profix = Math.max(max_profix, i - min_price);
    }
    return max_profix;
}

let res = maxProfit([7,1,5,3,6,4]);
console.log(res);