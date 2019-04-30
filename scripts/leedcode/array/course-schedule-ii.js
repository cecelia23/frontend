var findOrder = function(numCourses, prerequisites) {
  // let map = new Map();
  let arr = [], res = [];
  let item;
  for (let i = 0;i < numCourses;i++){
    // map.set(i,0);
    // arr.push(i);
    arr[i] = 0;
  }
  for (let i in prerequisites) {
    let first = prerequisites[i][0];
    // let num = map.get(first);
    // map.set(first,num+1);
    let num = arr[first];
    arr[first] = num+1;
  }
  console.log(arr);
  let index = arr.indexOf(0);
  while(index != -1){
    res.push(index);
    arr[index] = undefined;
    for (let item of prerequisites){
      let first = item[0];
      let second = item[1];
      if (second == index) {
        arr[first]--;
      }
    }
    index = arr.indexOf(0);
  }
  for (let i in arr){
    if (arr[i] != undefined){
      return [];
    }
  }
  return res;
  // for (let i of arr) {
  //   if (map.get(i) == 0) {
  //     map.delete(i);
  //     for (let item in prerequisites){
  //       if (item[1] == i){
  //         let num = map.get(item[0]);
  //         map.set(item[0],num-1);
  //       }
  //     }
  //   }
  // }
  // console.log(arr);
  // while(arr != null) {
  //   for (let i in arr){
  //     let key = arr[i][0];
  //     let num = arr[i][1];
  //     if (num == 0) {
  //       res.push(key);
  //       for (let i in prerequisites) {
  //         let first = prerequisites[i][0];
  //         let second = prerequisites[i][1];
  //         if (second == key){
  //           arr[first][1]--;
  //         }
  //       }
  //       arr[i] = [];
  //     }
  //   }
  // }

};
let num = 2;
let arr = [[1,0],[0,1]];
// let num = 4;
// let arr = [[1,0],[2,0],[3,1],[0,1]];
let res = findOrder(num,arr);
console.log(res);
