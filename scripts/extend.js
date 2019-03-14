function Person(name){
  this.name=name;
}
Person.prototype.sayName=function(){
  console.log(this.name)
}
function Student(name,age){
  Person.call(this,name);
  this.age=age;
}
Student.prototype=new Person();
Student.prototype.constructor=Student;
Student.prototype.sayAge=function(){
    console.log(this.age);
}
var s1=new Student('alex',20);
s1.sayName();
s1.sayAge();