var o={
  a:1,
  1:1,
  s:1,
  7:2,
  d:1,
  3:3,
  b:5
}

o[6]=10;
let str=Object.getOwnPropertyNames(o).join("")
console.log(str)

// let o1=Object.create(o);
// console.log(Object.getPrototypeOf(o1))
