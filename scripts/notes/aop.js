Function.prototype.before = function (beforefn) {
//待补全的函数
}
Function.prototype.after = function (afterfn) {
//待补全的函数
};
Function.prototype.before = function(fn){
    let _self=this;  //this==Function.prototype
    return function beforeFunc(){
      fn.apply(this,arguments);
      _self.apply(this,arguments);
    }
  }
Function.prototype.after = function(fn){
    let _beforeFunc=this;
    return function(){
      _beforeFunc.apply(this,arguments);
      fn.apply(this,arguments);
      // return res
    }
  }


var func = function () {
  console.log("2")
}

func = func.before(function () {
  console.log("1");
// })
}).after(function () { //此时,after函数中的this指向func.before
  console.log("3");
})();
