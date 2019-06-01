function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// 超时了
// var levelOrderBottom = function(root) {
//   if(!root) {
//     return [];
//   }
//   let cur = root;
//   let arr = [];
//   let res = [];
//   let idx = 0;
//   let tag = 0;
//   let log_2 = Math.log(2);
//   arr.push(cur);
//   tag++;
//   while (tag != 0) {
//     cur = arr.shift();
//     idx ++;
//     if (!(cur instanceof TreeNode)) {
//       arr.push(null);
//       arr.push(null);
//       continue;
//     }
//     tag --;
//     let level = Math.floor(Math.log(idx) / log_2);
//     if (!Array.isArray(res[level])) {
//       res[level] = [];
//     }
//     res[level].push(cur.val);
//     if (cur.left != null) {
//       arr.push(cur.left);
//       tag ++;
//     } else {
//       arr.push(null);
//     }
//     if (cur.right != null) {
//       arr.push(cur.right);
//       tag ++;
//     } else {
//       arr.push(null);
//     }
//     if (tag === 0) {
//       break;
//     }
//   }

//   return res.reverse();
// };
var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }
  let out = [];
  function dsf(root, level){
    if (!root) {
      return;
    }
    if (level === out.length) {
      out.push([root.val]);
    } else {
      out[level].push(root.val);
    }
    dsf(root.left, level+1);
    dsf(root.right, level+1);
  }
  dsf(root,0);
  return out.reverse();
}

let root1 =new TreeNode (3);
let root2 =new TreeNode (9);
let root3 =new TreeNode (20);
let root4 =new TreeNode (15);
let root5 =new TreeNode (7);
root1.left = root2;
root1.right = root3;
root3.left = root4;
root3.right = root5;

let res = levelOrderBottom(root1);
console.log(res)