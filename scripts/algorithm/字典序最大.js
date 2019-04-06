// 首先,按字典序排列的最大子序列一定包含最后一个字母
// 从后往前找,后面的总是小于等于前面的元素才能保证子序列按字典序排列
function dict_max(string){
let last_char=string.substr(-1,1);
let arr = [];
let len = string.length;
let t = last_char;
for (let i=len-1;i>=0;i--){
  let char = string.substr(i,1);
  if (char >= t){
    arr.unshift(char);
    t = char;
  }
}
return arr.join("");
}
let res = dict_max('ababba');
console.log(res);


// while(line=readline()){
//     var lines = line.split(' ');
//     var a = parseInt(lines[0]);
//     var b = parseInt(lines[1]);
//     print(a+b);
// }