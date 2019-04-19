function Dictionary(){
  this.datastore = new Array();
}
Dictionary.prototype.set = function (key,val) {
  this.datastore[key] = val;
}
Dictionary.prototype.get = function (key) {
  return this.datastore[key];
}
Dictionary.prototype.delete = function (key) {
  delete this.datastore[key];
}
Dictionary.prototype.show = function () {
  for (let key in this.datastore){
    console.log(key + '-->' + this.datastore[key]);
  }
}
Dictionary.prototype.count = function () {
  let n = 0;
  for (let key in this.datastore) {
    n++;
  }
  return n;
}
Dictionary.prototype.clear = function () {
  for (let key in this.datastore) {
    delete this.datastore[key];
  }
}
// 按键排序；
Dictionary.prototype.sort = function () {
  let  key,val;
  let  res=Object.keys(this.datastore).sort()
  for (key in res) {
    console.log(res[key],this.datastore[res[key]]);
  }
}
var pbook = new Dictionary();
pbook.set('n1',213);
pbook.set('n2',231);
pbook.set('n6',83);
pbook.set("Raymond","123");
pbook.set("David", "345");
pbook.set("Cynthia", "456");
pbook.set("Mike", "723");
pbook.set("Jennifer", "987");
pbook.set("Danny", "012");
pbook.set("Jonathan", "666");
// console.log(pbook.get('n1'));
// pbook.show();

pbook.delete('n1');
console.log(pbook.count());;
pbook.sort();
// pbook.clear();
// pbook.show();


