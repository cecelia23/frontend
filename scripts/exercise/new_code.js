var scope=1;
function test(scope) {
  var scope;
  console.log(scope);
  scope = 3;
}
test(scope);