function PromiseM () {
  this.msg='';
  this.status = "pending";
  var process = arguments[0]; //参数是函数
  var that = this;
  process(function(){
    that.status='resolve';
    that.msg = arguments[0];
  },function(){
    that.status = 'reject';
    that.msg = arguments[0];
  });
}
PromiseM.prototype.then = function () {
  if (this.status=='resolve') {
    arguments[0](this.msg);
  }
  if (this.status == 'reject' && arguments[1]){
    arguments[1](this.msg);
  }
}

var mm=new PromiseM(function(resolve,reject){
  resolve('123');
});
mm.then(function(){
  console.log('success');
},function(){
  console.log('fail');
})