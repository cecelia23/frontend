var isBalanced = function(root) {
  function dsfHeight(node) {
    if (node === null) {
      return 0;
    }
    let left_height = dsfHeight(node.left);
    if (left_height === -1) {
      return -1;
    }
    let right_height = dsfHeight(node.right);
    if (right_height === -1) {
      return -1;
    }
    if (Math.abs(left_height - right_height) > 1) {
      return -1;
    }
    return Math.max(left_height, right_height) + 1;
  }
  let res = dsfHeight(root) === -1 ? false : true;
  return res;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(1);
let root1 = new TreeNode(2);
let root2 = new TreeNode(2);
let root3 = new TreeNode(3);
let root4 = new TreeNode(3);
let root5 = new TreeNode(4);
let root6 = new TreeNode(4);

let root7 = new TreeNode(7);

root.left = root1;
root.right = root2;
root1.left = root3;
root1.right = root4;
// root3.left = root5;
root2.right = root6;
root3.right = root7;
let res = isBalanced(root);
console.log(res);
