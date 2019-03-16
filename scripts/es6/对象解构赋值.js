let person={
  name:'alex',
  age:23
}
// let {name,age}=person;
// console.log(name,age);

// 对已有变量通过解构重新赋值
// let name='bob';
// let age=24;
// ({name,age}=person);
// console.log(name,age);

// 解构后更换变量名
let {name:localName,age:personalAge}=person;
console.log(localName,personalAge);