function SuperType(name){
  this.name=name;
  this.colors=['red','yellow','blue']
};
SuperType.prototype.sayName=function(){
  console.log(this.name)
}
function SubType(name,age){
  SuperType.call(this,name);
  this.age=age;
}
SubType.prototype=new SuperType();
SubType.prototype.constructor=SuperType;
SubType.prototype.sayAge=function(){
  console.log(this.age);
}

let person1=new SubType('nickol',19);
person1.colors.push('green');
person1.sayAge();
person1.sayName();
console.log(person1.colors)

let person2=new SubType('mark',20)
console.log(person2.colors);