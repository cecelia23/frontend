function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isSymmetric = function(root) {
    if (root == null){
      return true;
    }
    let arr1=[],arr2=[];
    let p = root.left;
    let q = root.right;
    arr1.push(p);
    arr2.push(q);
    // let flag = 0;
    while (arr1.length != 0 && arr2.length != 0){
      p = arr1.shift();
      q = arr2.shift();
      if (p == null && q == null){
        continue;
      }else if(p != null && q ==null) {
        return false;
      }else if(p == null && q !=null) {
        return false;
      }else{
        let val1 = p.val;
        let val2 = q.val;
        console.log(val1,val2);
        if (val1 != val2){
          return false;
        }
        // if (p.left != null|| p.right != null || q.left !=null || q.right != null){
          arr1.push(p.left);
          arr1.push(p.right);
          arr2.push(q.right);
          arr2.push(q.left);
        // }
      }
    }
    return true;
};

var p = new TreeNode(1);
var l1 = new TreeNode(2);
var r1 = new TreeNode(2);
var l2 = new TreeNode(3);
var r2 = new TreeNode(3);
var l3 = new TreeNode(4);
var r3 = new TreeNode(4);

var l4 = new TreeNode(8);
var r4 = new TreeNode(9);
var l5 = new TreeNode(8);
var r5 = new TreeNode(9);

p.left = l1;
p.right = r1;
l1.left = l2;
l1.right = l3;
r1.left = r3;
r1.right = r2;
// l3.left = l4;
// l3.right = r4;
// r2.left = l5;
// l3.right = r5;

let res = isSymmetric(p);
console.log(res);