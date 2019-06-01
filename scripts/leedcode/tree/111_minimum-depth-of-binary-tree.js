var minDepth = function(root) {
  function dsf(node) {
    if (node === null) {
      return 0;
    }
    let left_depth = dsf(node.left);
    let right_depth = dsf(node.right);

    if (left_depth === 0 || right_depth === 0) {
      return left_depth + right_depth + 1;
    } else {
      return Math.min(left_depth, right_depth) + 1;
    }
  }
  return dsf(root);
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(0);
let root1 = new TreeNode(1);
let root2 = new TreeNode(2);
let root3 = new TreeNode(3);
let root4 = new TreeNode(4);
let root5 = new TreeNode(5);
let root6 = new TreeNode(6);
let root7 = new TreeNode(7);

root.left = root1;
root.right = root2;
root1.left = root3;
// root1.right = root4;
root3.left = root5;
root2.right = root6;
root5.right = root7;

let res = minDepth(root);
console.log(res);