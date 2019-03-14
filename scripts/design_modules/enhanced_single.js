var application=(function(){
  var private_variable=10;
  function private_methods(){
    return false;
  }

  var object=new Array();
  object.publicProperty=20;
  object.publicMethod=function(){
    private_variable++;
    return private_methods();
  }
  return object;
})();

console.log(application.publicMethod())

