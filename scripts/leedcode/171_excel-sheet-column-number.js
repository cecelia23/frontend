var titleToNumber = function(s) {
  let len = s.length;
  s = s.toLowerCase();
  let res = [];
  let num = 0;
  for (let i = 0; i < len; i++) {
    let idx = s[i].charCodeAt() - 97;
    num += (idx + 1) * Math.pow(26, len - 1 - i);
  }
  return num;
};
let res = titleToNumber('ZY');
console.log(res);