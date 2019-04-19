function output(obj){
  var arr=[];
  let len = 0;
  for (let i in obj){
    len++;
  }
  while(len>0){
    for (var i in obj){
      if (obj[i].length == 0) {
        if (arr.indexOf(i)==-1){
          arr.push(i);
          break;
          // console.log(i);
        }
      }
    }
    for (let j in obj){
      let k = obj[j].indexOf(i);
      // console.log(k)
      if (k!=-1) {
        obj[j].splice(k,1);
      }
      // console.log(obj[j]);
    }
    len--;
    // console.log(len);
  }
  for (let i in obj){
    if (arr.indexOf(i)==-1){
      arr.push(i);
    }
  }
  return arr;
}
var json_obj={"A":["B","C"],"B":["D","C","F"],"C":["E"],"D":[],"E":["D"],"F":["E","C"]}
let res = output(json_obj);
console.log(res);