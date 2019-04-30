input = {
  "A":['123','342'],
  "B":['abc','csn']
}
function forResult(data) {
  let res = [], keys= [], values= []; 
  for (let i in data) {
    keys.push(i);
    values.push(data[i]);
  }
  for (let i in keys){
    let key =  keys[i]
    for (let j = 0; j < values[i].length; j++){
      let value = values[i][j];
      let jsonObj = {
        "type":key,
        "value":value
      }
      res.push(jsonObj);
    }
  }
  return res;
}
let res = forResult(input);
console.log(res);