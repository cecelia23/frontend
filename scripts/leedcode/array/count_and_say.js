var countAndSay = function(n) {
  let res = "1";
  if (n == 1){
      return res;
  }
  for(let i=2;i<=n;i++){
      let len = res.length;
      let k = 0;
      let new_res = "";
      
      for (let j = 1;j<len;j++){
        if (res[j] != res[k]){
          if (new_res.length == 0){
            new_res += (k+1) + res[k];
          // k = j;
          }else {
            new_res += (k + 1 - new_res.slice(-2,1)) + res[k];
          }
        }
        k++;
      }
      if (res.length == 1){
        new_res = "11";
      }else if (res[len-1] == res[len-2]){
        if (new_res.length == 0){
          new_res += (k+1) + res[k];
        }else {
          let size = 0;
          for (let m = 0;m < k;m = m+2){
            size += Number(new_res[m]);
          }
          new_res += (res.length - size) + res[k];
        }       
      }else if(res[len-1] != res[len-2]){
        new_res += 1 + res[k];
      }
      res = new_res; 
  }
  return res;
};

var res = countAndSay(5);
console.log(res);
