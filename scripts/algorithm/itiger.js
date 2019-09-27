// let 临时死区
// let a = test + 22;
// let test ='234';
// referenceError

// 解构赋值
// case 1
// let {a = b, b, c} = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// console.log(a, b, c);  // 1,2,3

// case 2
// let {a = b, b, c} = {
//   b: 2,
//   c: 3
// }
// b is not defined
let {b, a = b, c} = {
  b: 2,
  c: 3
}
// 2 2 3
// var {a = b, b, c} = {
//   b: 2,
//   c: 3
// }
// undefined 2 3
console.log(a, b, c);

// 箭头函数
let obj = {
  name: 123,
  foo: () => {
    console.log(this);
  },
  baz: function () {
    console.log('baz',this);
  }
}
var name = 345;
obj.foo.call(this);
obj.baz.call(this);