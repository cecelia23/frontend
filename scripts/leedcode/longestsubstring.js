var longestSubstring = function (s) {
  let sub = "";
  let len = 0;
  for (let i of s) {
    if (sub.indexOf(i) == -1) {
      sub += i;
      len = len > sub.length ? len : sub.length; // 记录最大长度
    } else {
      sub = sub.substring(sub.indexOf(i)+1) + i;
    }
  }
  return len;
}
let s = "awwabcabc";
let res = longestSubstring(s);
console.log(res);