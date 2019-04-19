function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function Tree(){
   this.root = null;
}

var tree = new Tree();
let root = new TreeNode(1);
let lft = new TreeNode(2);
let rgt = new TreeNode(3);
let lft1 = new TreeNode(4);
let rgt2 = new TreeNode(5);
tree.root = root;
root.left = lft;
root.right = rgt;
rgt.left = rgt2;
lft.right = lft1;

var layer_run = function(tree) {
  let cur = tree.root;
  let queue = [];
  if (cur == null){
    return;
  }
  queue.push(cur);
  while (queue.length != 0){
    let cur = queue.shift();
    if (cur == null){
      console.log(undefined);
      continue;
    }
    console.log(cur.val);
    if (cur.left != null || cur.right != null){
      queue.push(cur.left);
      queue.push(cur.right);
    }
  }
}
// layer_run(tree);

var isSameTree = function(p, q) {
    let arr1 = [], arr2 = [];
    let p1 = p.root;
    let p2 = q.root;
    arr1.push(p1);
    arr2.push(p2);
    while (arr1.length !=0 && arr2.length !=0){
      p1 = arr1.shift();
      p2 = arr2.shift();
      if (p1 == null && p2 == null){
        continue;
      }else if(p1 == null && p2 !=null){
        return false;
      }else if(p1 != null && p2 == null){
        return false;
      }else{
        v1 = p1.val;
        v2 = p2.val;
        if (p1.left != null || p1.right != null) {
          arr1.push(p1.left);
          arr1.push(p1.right);
        }
        if (p2.left != null || p2.right != null) {
          arr2.push(p2.left);
          arr2.push(p2.right);
        }
        if (v1 != v2) {
          return false;
        }
      }
    }
    return true;
    
};


var tree1 = new Tree();
var tree2 = new Tree();

let root1 = new TreeNode(1);
let root2 = new TreeNode(1);
let left1 = new TreeNode(2);
let right1 = new TreeNode(3);
let left2 = new TreeNode(1);
let right2 = new TreeNode(3);
tree1.root = root1;
tree2.root = root2;

// root1.left = left1;
root2.right = right2;
// root2.left = left2;
root1.right = right1;
let res = isSameTree(tree1,tree2);
console.log(res);