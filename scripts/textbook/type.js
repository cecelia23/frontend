// console.log(
//   typeof 123, //"number"
//   typeof 'dsfsf', //"string"
//   typeof false, //"boolean"
//   typeof [1,2,3], //"object"
//   typeof {a:1,b:2,c:3}, //"object"
//   typeof function(){console.log('aaa');}, //"function"
//   typeof undefined, //"undefined"
//   typeof null, //"object"
//   typeof new Date(), //"object"
//   typeof /^[a-zA-Z]{5,20}$/, //"object"
//   typeof new Error() //"object"
// );

var num  = 123;
var str  = 'abcdef';
var bool = true;
var arr  = [1, 2, 3, 4];
var json = {name:'wenzi', age:25};
var func = function(){ console.log('this is function'); }
var und  = undefined;
var nul  = null;
var date = new Date();
var reg  = /^[a-zA-Z]{5,20}$/;
var error= new Error();

function Person(){
  
}
var tom = new Person();

// undefined和null没有constructor属性
console.log(
    tom.constructor==Person,
    num.constructor==Number,
    str.constructor==String,
    bool.constructor==Boolean,
    arr.constructor==Array,
    json.constructor==Object,
    func.constructor==Function,
    date.constructor==Date,
    reg.constructor==RegExp,
    error.constructor==Error
);
//所有结果均为true