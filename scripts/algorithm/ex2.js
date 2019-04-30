// const node = {a:1,b:2};
// let a=3,b=9;
//  ({a,b} = node);
// console.log(a,b);

// const {a,b} = {};
const {a, b:{c}={}} = {};
console.log(a,c);