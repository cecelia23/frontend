function anotherPerson(person){
  let another=Object(person);
  another.sayHi=function(){
    console.log('hi');
  }
  return another
}
var person={
  name:'nickoles',
  friends:['Shelby','Court','Van']
};
var another1=anotherPerson(person);
another1.sayHi()
