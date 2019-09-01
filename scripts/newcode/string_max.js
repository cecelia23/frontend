// // 输出字符串中出现次数最多的字符及其次数
// function times(string){
//     var set = new Set();
//     var len = string.length;
//     var size = set.size;
//     var map = new Map();
//     for (let i=0;i<len;i++){
//         let char = string.substr(i,1);
//         set.add(char);
//         if (set.size == size){
//             map.set(char,map.get(char)+1);
//             // console.log(map);
//         }else{
//             map.set(char,1);
//             size++;
//             // console.log(map);
//         }
//     }
//     var arr = [];
//     var arr2 = [];

//     for (let i of map.keys()){
//         arr.push(i);
//     }
//     for (let i of map.values()){
//         arr2.push(i);
//     }
//     console.log(arr);
//     console.log(arr2);
//     var max = Math.max.apply(Math,arr2);
//     var obj = {};
//     for (let i=0;i<arr2.length;i++){
//         if (arr2[i] == max) {
//             key = arr[i];
//             obj[key] = max;
//         }
//     }
//     return obj;
// }

// let res = times("xyyyxxzz");
// console.log(res);
arr =[0,1,2,3,4,5,6,7,8,9];
arr.forEach((_,index) => {
    index % 2 === 0 && arr.splice(index,1)
});
console.log(arr);