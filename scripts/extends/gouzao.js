function SuperType(name){
  this.name=name;
  this.colors=['red','yellow','blue']
};

function SubType(name){
  SuperType.call(this,name);
  this.sayName=function(){
    console.log(this.name)
  }
}
var sb1=new SubType('ALEX');
sb1.sayName();