(function(){
  var name="";
  Person=function(value){
    name=value;
  };
  Person.prototype.getName=function(){
    return name;
  };
  Person.prototype.setName=function(value){
    name=value;
  };
})();
var person1=new Person('Nick');
console.log(person1.getName());
person1.setName('Alex');
console.log(person1.getName());

var person2=new Person('Greg');
console.log(person2.getName());
console.log(person1.getName());
