function Set (arr) {
  let item = {};
  let length = 0;
  if (arr) {
    for (let i of arr) {
      item[i] = i;
    }
    length = arr.length;
  }

  this.has = function (val) {
    return item.hasOwnProperty(val);
  }
  this.add = function (val) {
    if (!this.has(val)) {
      item[val] = val;
      length ++;
    }
  }
  this.delete = function (val) {
    if (this.has(val)) {
      delete item[val];
      length --;
    }
  }
  this.clear = function () {
    item = {};
    length = 0;
  }
  this.size = function() {
    return length;
  };
  this.values = function () {
    return Object.values(item);
  }
}

let set = new Set([1, 2, 3]);
console.log(set.has(3));
console.log(set.has(4));
set.add(5);
console.log(set.has(5));
console.log(set.size());  
set.delete(3);
console.log(set.has(3));
console.log(set.size());
console.log(set.values());

