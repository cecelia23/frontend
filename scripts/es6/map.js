class Map {
  constructor (arr = []) {
    this.items = {};
    this.size = 0;
    arr.forEach(arr_item => {
      this.set(arr_item[0], arr_item[1]);
    })
  }
  has (val) {
    return this.items.hasOwnProperty(val);
  }
  set (key, val) {
    if (!this.has(key)) {
      this.size ++;
    }
    this.items[key] = val;
  }
  get (key) {
    return this.has(key)? this.items[key]: undefined;
  }
  delete (key) {
    if (this.items.has(key)) {
      delete this.items[key];
      this.size --;
      return true;
    } else {
      return false;
    }
  }
  clear () {
    this.items = {};
    this.size = 0;
  }
  keys () {
    return Object.keys(this.items);
  }
  values () {
    return Object.values(this.items);
  }
}

let map = new Map([['name', 'alice'], ['age', 19]]);
console.log(map.has('age'));
console.log(map.get('age'));
map.set('address', 'bupt');
map.set('age',20);
console.log(map.size);
console.log(map.keys());
console.log(map.values());