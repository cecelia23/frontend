function Cores(){
  this.cores=[...arguments];
}
Cores.prototype.add=function(num){
  this.cores.push(num);
}
Cores.prototype.average=function(){
  let average=0.0;
  let result=this.cores.reduce((prev,cur)=>prev+cur);
  let numOfCore=this.cores.length;
  return average=result/numOfCore;
}
var c1=new Cores(87,86,85,88);
console.log(c1.average());
c1.add(84);
console.log(c1.average());

