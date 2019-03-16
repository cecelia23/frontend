// console.log(Object.is(+0,-0))
// console.log(Object.is(NaN,NaN))

let object={};
console.log(typeof object.emit);
function EventTarget(){};
EventTarget.prototype={
  constructor:EventTarget,
  emit:function(){}
};
Object.assign(object,EventTarget.prototype)
console.log(typeof object.emit)
console.log(object.constructor)
