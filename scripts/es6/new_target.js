//使函数只能通过new调用
function Person(name){
  if (typeof new.target!=undefined){
    this.name=name;
  }else{
    throw new error('cannot call');
  }
}

let person1=new Person('alex');
console.log(person1.name);
let person2=Person.call(person1,'alex');
console.log(person2.name)