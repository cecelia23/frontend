function SuperType(name){
  this.name=name||'bob';
  this.colors=['red','yellow','blue']
};

function SubType(){

}
SubType.prototype=new SuperType();
SubType.prototype.age=20;

var sb1=new SubType();
console.log(sb1.name);
sb1.colors.push('green')
var sb2=new SubType();
console.log(sb2.colors);