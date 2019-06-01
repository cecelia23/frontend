var addBinary = function(a, b) {
    let tag = 0;
    let res = [];
    let a_len = a.length;
    let b_len = b.length;
    let len = Math.max(a_len, b_len);

    if(a_len < b_len) {
      for (let i = 0; i<(b_len-a_len);i++){
        a = '0'.concat(a);
      }
      // console.log(a);

    } else if (b_len < a_len){
      for (let i = 0; i<(a_len-b_len);i++){
        b = '0'.concat(b);
        // console.log(b);
      }
    }
    let ai, bi, sum;
    for (let i = len - 1; i >= 0; i--) {
      bi = parseInt(b[i]);
      ai = parseInt(a[i]);
      sum = ai + bi + tag;
      if (sum >= 2) {
        tag = 1;
      } else {
        tag = 0;
      }
      res.push(sum % 2);
    }
    if (tag == 1) {
      res.push(tag);
    }
    res.reverse();
    let output = res.join('');
    return output;
};

let res = addBinary('1010','1011');
console.log(res);