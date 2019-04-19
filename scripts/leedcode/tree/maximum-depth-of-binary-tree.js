function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var maxDepth = function(root) {
  if (root == null) {
    return 0;
  }
  let arr = [];
  let cur = root;
  let count = 0;
  arr.push(cur);
  while(arr.length != 0){
    let size = arr.length;
    for (let i = arr.length;i>0;i--){
      cur = arr.shift();

      if (cur.left != null && cur.left != undefined){
        arr.push(cur.left);
      }
      if (cur.right != null && cur.right != undefined){
        arr.push(cur.right);
      }
    }
    count++;
  }
  
  // console.log(count);
  return count;
}
var p = new TreeNode(0);
var l1 = new TreeNode(2);
var r1 = new TreeNode(2);
var l2 = new TreeNode(3);
var r2 = new TreeNode(3);
var l3 = new TreeNode(4);
var r3 = new TreeNode(4);
var l4 = new TreeNode(5);

// p.left = l1;
// // p.right = r1;
// l1.left = l2;
// // l1.right = l3;
// // r1.left = r3;
// // r1.right = r2;
// l2.left = l3;
// l3.left = l4;
// var res = Number.MAX_VALUE+10;

let res = maxDepth(p);
console.log(res);
