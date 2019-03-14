function Person(name){
  this.name=name;
  this.sayName=function(){
    console.log(this.name);
  }
}
var p1=new Person('bob');
p1.sayName();