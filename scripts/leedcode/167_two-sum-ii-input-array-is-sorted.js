// var twoSum = function(numbers, target) {
//   let length = numbers.length;
//   let last = numbers[length -1];
//   let res = [];
//   for (let i = 0; i < length; i++) {
//     if (numbers[i] + last === target) {
//       res.push(i+1, length);
//       return res;
//     } else if (numbers[i] + last < target) {
//       continue;
//     } else {
//       for (let j = i+1; j < length -1; j++) {
//         if (numbers[i] + numbers[j] === target) {
//           res.push(i+1, j+1);
//           return res;
//         }
//       }
//     }
//   }
// };
var twoSum = function(numbers, target) {
  let length = numbers.length;
  let res = [];
  let left = 0, right = length - 1;
  while(left < right) {
    let val = numbers[left] + numbers[right];
    if (val === target) {
      res.push(left+1, right+1);
      return res;
    } else if (val < target) {
      left++;
    } else {
      right--;
    }
  }
}

let res = twoSum([-5,-4,11,15], 7);
console.log(res);