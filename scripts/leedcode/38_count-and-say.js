var countAndSay = function(n) {
  let start = 0;
  let end = 0;
  let str = '1';
  let temp = '';
  for (let j = 1; j < n; j++){
    for (let i = 0;i < str.length; i++) {
      if (str[i+1] !== str[i]) {
        end = i+1;
        let num = end - start;
        temp += num;
        temp += str[i];
        
        start = end;
      }
    }
    start = 0;
    end = 0;
    str = temp;
    temp = '';
  }
  return str;
};

let res = countAndSay(5);
console.log(res);
