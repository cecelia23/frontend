// function sumFn(a,b,c,d) {
//   return a + b + c ;
// }
// function curry(fn, args) {
//   var length = fn.length;
//   var args = args || [];
//   return function () {
//     newArgs = args.concat(Array.prototype.slice.call(arguments));
//     if (newArgs.length < length) {
//       return curry.call(this, fn, newArgs);
//     } else {
//       return fn.apply(this, newArgs);
//     }
//   }
// }

// var sum = curry(sumFn);
// console.log(sum(1)(2)(3));
function sum (...arg1) {
  return function (...arg2) {
    if (arg2.length > 0) {
      return sum(...arg1,...arg2);
    } else {
      return arg1.reduce((prev, curr) =>curr + prev);
    }
  }
}

let res = sum(1)(2)(3)();
console.log(res);