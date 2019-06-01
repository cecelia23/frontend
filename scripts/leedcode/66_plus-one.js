var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] + 1 <= 9) {
        digits[i] += 1;
        break;
      } else {
        digits[i] = 0;
        if (i === 0) {
          for (let i = digits.length - 1; i >= 0; i--){
            digits[i+1] = digits[i];
          }
          digits[0] = 1;
        }
      }
    }
    return digits;
};
let res = plusOne([0]);
console.log(res);