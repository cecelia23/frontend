function inheritPrototype(SuperType,SubType){
  let prototype=Object(SuperType.prototype);
  prototype.constructor=SubType;
  SubType.prototype=prototype;
}

function SuperType(name){
  this.name=name;
}
SuperType.prototype.sayName=function(){
  console.log(this.name);
}
function SubType(name,age){
  SuperType.call(this,name);
  this.age=age;
}
inheritPrototype(SuperType,SubType);

SubType.prototype.sayAge=function(){
  console.log(this.age);
}
let sub1=new SubType('nick',23);
sub1.sayName();
sub1.sayAge();