function Point(x,y){
  this.x=x;
  this.y=y;
}

function displayArr(arr){
  for(var i=0;i<arr.length;i++){
    console.log(arr[i].x+" "+arr[i].y);
  }
}

var p1=new Point(2,3);
var p2=new Point(5,4);
var p3=new Point(7,9);
var arr1=[p1,p2,p3];
var p4=new Point(8,3);
arr1.push(p4);
displayArr(arr1);
console.log('after shift')
arr1.shift();
displayArr(arr1);
