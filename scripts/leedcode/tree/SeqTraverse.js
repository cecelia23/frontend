var node = function (val){
  this.val = val;
  this.left = null;
  this.right = null;
}



var SeqTraverse = function(node) {
  let arr = [];
  let res = [];
  let cur;
  // while (node != null || arr.length != 0){
    arr.push(node);
    while(arr.length != 0){
      cur = arr.shift();
      res.push(cur.val);
      if (cur.left != null){
        arr.push(cur.left);
      }
      if (cur.right != null){
        arr.push(cur.right);
      }
    }
    return res;
  // }
}

let n1= new node(1);
let n2 = new node(2);
let n3 = new node(3);
let n4 = new node(4);
let n5 = new node(5);
let n6 = new node(6);
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right =n5;
n3.right = n6;
let res = SeqTraverse(n1);
console.log(res);
