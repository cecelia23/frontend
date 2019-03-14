function createObject(name,age){
  var o=new Object();
  o.name=name;
  o.age=age;
  o.sayName=function(){
    console.log(this.name);
  }
  o.addYear=function(){
    console.log(++this.age);
  }
  return o;
}

var obj=createObject('alex',20);
obj.sayName();
obj.addYear();