let colors=['red','blue','green'];
// let [firstColor,secondColor]=colors;
// console.log(firstColor,secondColor);

let [,,thirdColor]=colors;
console.log(thirdColor);

// let firstColor='black',
// secondColor='purple';
// [firstColor,secondColor]=colors;
// console.log(firstColor,secondColor);

// 交换元素位置
// let a=1,b=2;
// [a,b]=[b,a];
// console.log(a,b);

// rest parameters
let [first,...rest]=colors;
for (let i in rest) {
  console.log(rest[i]);
}

let [...color2]=colors;
console.log(color2)
