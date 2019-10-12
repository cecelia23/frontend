function Set (arr) {
  let item = {};
  this.size = 0;
  if (arr) {
    for (let i of arr) {
      item[i] = i;
    }
    this.size = arr.length;
  }

  this.has = function (val) {
    return item.hasOwnProperty(val);
  }
  this.add = function (val) {
    if (!this.has(val)) {
      item[val] = val;
      this.size ++;
    }
  }
  this.delete = function (val) {
    if (this.has(val)) {
      delete item[val];
      this.size --;
    }
  }
  this.clear = function () {
    item = {};
    this.size = 0;
  }
  this.values = function () {
    return Object.values(item);
  }
}

let set = new Set([1, 2, 3]);
console.log(set.has(3));
console.log(set.has(4));
set.add(0);
console.log(set.has(0));
console.log(set.size);  
set.delete(3);
console.log(set.has(3));
console.log(set.size);
console.log(set.values());

