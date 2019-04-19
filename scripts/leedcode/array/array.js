// var array=new Array();
// console.log(array.length)

// var array1=Array.of(2);
// console.log(array1.length,array1[0])

var str="hello, this is cecelia"
var array1=str.split(" ")
// for (let i=0;i<array1.length;i++)
// {
//   console.log(array1[i])
// }
// // console.log()
// //deep clone
// var array2=array1.concat();
// // shalow clone
// var array3=array2
// var index1=array1.indexOf('is');
// console.log(index1)

// // var str1=array1.join();
// // console.log(str1);

// var array4=array1.concat(array2,array3)
// console.log(array4)

// 栈
// var array1=[1,2,3,4,5];
// array1[array1.length]=6;

// array1.push(6);
// console.log(array1)
// var pop_num=array1.pop();
// console.log(pop_num);
// console.log(array1);

// 队列
// var array=[1,2,3,4,5];
// var shift_num=array.shift();
// console.log(shift_num);
// console.log(array);

var num1=new Array(20);
for (let i=0;i<20;i++){
  num1[i]=Math.floor(Math.random()*101);
}
// console.log(num1);
var num3=[1,2,3,7,8,9,10];
// var newArr=[4,5,6];
// num3.splice(3,3);
// console.log(num3)

// console.log(num3.reverse())

// var num2=num3.sort((a,b)=>a-b);
// console.log(num2)

// function square(num){
//   console.log(num,num*num);
// }
// num3.forEach(square);

// console.log(num3.every((num)=>num%2==0));
// console.log(num3.some((num)=>num%2==1));
console.log(num1.filter((num)=>num%2==0));

var words=["recieve","deceive","percieve","deceit","concieve"]
function filterie(word){
  if (word.indexOf('ie')==-1){
    return true;
  }else{
    return false;
  }
}
console.log(words.filter(filterie));
// console.log(num3.reduce((pre,now)=>pre+now));
// console.log(array1.reduceRight((prev,now)=>prev+now));

// var num2=num3.map((num)=>num+5);
// console.log(num2);

//构造二维数组
// Array.matrix=function(numrows,numcols,str){
//   var arr=new Array();
//   for (let i=0;i<numrows;i++){
//     var column=[];
//     for(let j=0;j<numcols;j++){
//       column[j]=str;
//     }
//     arr[i]=column;
//   }
//   return arr;
// }

// var array5=Array.matrix(5,5,10);
// console.log(array5);

// var arr=[[3,4,2],[7,5,3],[8,6,1]]
// console.log(arr[1][1])

//参差不齐的数组
var arr=[[3,4],[7,5,3],[8,5,2,9]];
// console.log(arr.length);
for (let row=0;row<arr.length;row++){
  var sum=0;
  var aver=0.0;
  for (let col=0;col<arr[row].length;col++){
    
    sum+=arr[row][col];
  }
  aver=sum/arr[row].length;
  console.log(aver);
}
