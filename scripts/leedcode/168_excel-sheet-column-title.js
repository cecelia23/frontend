var convertToTitle = function(n) {
    let num_A = 'A'.charCodeAt();
    let num_arr = [];
    let res = '';
    let last_letter = n % 26;
    var first_letter = Math.floor(n / 26);
    if (last_letter == 0) {
      num_arr.unshift(26);
      first_letter -= 1;
    } else {
      num_arr.unshift(last_letter);
    }
    while (first_letter > 26) {
      let last_letter = first_letter % 26;
      if (last_letter == 0) {
        num_arr.unshift(26);
        first_letter -= 1;
      } else {
        num_arr.unshift(last_letter);
      }
      first_letter = Math.floor(first_letter / 26);
    }
    if (first_letter !== 0) {
      num_arr.unshift(first_letter);
    }
    for (let i of num_arr) {
      let num_i = (num_A + i -1);
      res += String.fromCharCode(num_i);
    }
    return res;
    // 
};
let res = convertToTitle(26);
console.log(res);