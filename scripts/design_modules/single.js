var Single=(function(){
  var private_property=0;
  var private_method=function(){
    console.log('this is private.');
  } 
  return {
    prop:1,
    method:function(){
      private_method();
      return private_property;
    }
  }
})();
console.log(Single.prop);
console.log(Single.method());