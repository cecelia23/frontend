function A(name){
  this.name=name;
  this.sayName=function(){
    console.log(this.name)
  }
  return this;
}
var a1=new A('hello')
a1.sayName();
var a2=A('alex');
a2.sayName();