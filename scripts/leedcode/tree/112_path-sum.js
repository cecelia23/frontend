var hasPathSum = function(root, sum) {
  if (root === null) {
    return false;
  }
  return find_val (root, sum);
  function find_val (node, val) {
    // 叶子节点
    if (node.left === null && node.right === null) {
      if (node.val === val) {
        return true;
      } else {
        return false;
      }
    }
    // 还有子节点
    let left_res, right_res;
    if (node.left !== null) {
      left_res = find_val(node.left, val - node.val);
    }
    if (node.right !== null) {
      right_res = find_val(node.right, val - node.val);
    }
    return Boolean(left_res) || Boolean(right_res);
  }
  
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(-2);
let root1 = new TreeNode(2);
let root2 = new TreeNode(-3);
let root3 = new TreeNode(11);
let root4 = new TreeNode(13);
let root5 = new TreeNode(4);
let root6 = new TreeNode(7);
let root7 = new TreeNode(2);
let root8 = new TreeNode(1);

// root.left = root1;
root.right = root2;
// root1.left = root3;
// // root1.right = root4;
// root2.left = root4;
// root2.right = root5;
// root3.left = root6;
// root3.right = root7;
// root5.right = root8;

let res = hasPathSum(root, -5);
console.log(res);