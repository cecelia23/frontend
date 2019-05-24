// 二叉查找树
function node(val, left, right){
  this.val = val;
  this.left = left;
  this.right = right;
  //非必须
  this.count = 1;
}
node.prototype.show = function(){
  return this.val;
}
function BST(){
  this.root = null;
  this.inOrder = inOrder;
  this.leftOrder = leftOrder;
  // this.rightOrder = rightOrder;
}
BST.prototype.insert = function(val) {
  var n = new node(val,null,null);
  if (this.root == null){
    this.root = n;
  }else{
    var cur = this.root;
    var parent;
    while(true){
      parent = cur;
      if (val <= cur.val) {
        cur = cur.left;
        if (cur == null){
          parent.left = n;
          break;
        }
      } else {
        cur = cur.right;
        if (cur == null){
          parent.right = n;
          break;
        }
      }
    }
  }

}
// 中序
var inOrder = function (node) {
  // 递归
  // if (node!=null){
  //   arguments.callee(node.left);
  //   console.log(node.show());
  //   arguments.callee(node.right);
  // }
  // 栈
  let arr = [];
  let res = [];
  let cur = node;
  // while (cur != null || arr.length != 0) {
  //   if (cur) {
  //     arr.push(cur);
  //     cur = cur.left;
  //   }else{
  //     cur = arr.pop();
  //     res.push(cur.val);
  //     cur = cur.right;
  //   }
  // }

  while (cur != null || arr.length != 0){
    if (cur) {
      // 当前节点不为空
      arr.push(cur);
      cur = cur.left;
    } else {
      // 当前节点为空
      cur = arr.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
}
// 先序
var leftOrder = function (node) {
  // if (node != null){
  //   console.log(node.show());
  //   arguments.callee(node.left);
  //   arguments.callee(node.right);
  // }
  var arr = [];
  var res = [];
  var cur = node;
  // while(cur != null){
  //   res.push(cur.val);
  //   if (cur.right != null){
  //     arr.push(cur.right);
  //   }
  //   cur = cur.left;
  // }
  // while(arr.length != 0){
  //   cur = arr.pop();
  //   while(cur != null){
  //     res.push(cur.val);
  //     if (cur.right != null){
  //       arr.push(cur.right);
  //     }
  //     cur = cur.left;
  //   }
  // }
  while (cur != null) {
    // console.log(cur.val);
    res.push(cur.val);
    if (cur.right != null){
      arr.push(cur);
    }
    cur = cur.left;
  }
  
  while (arr.length != 0){
    cur = arr.pop();
    cur = cur.right;
    while (cur != null) {
      // console.log(cur.val);
      res.push(cur.val);
      if (cur.right != null){
        arr.push(cur);
      }
      cur = cur.left;
    }
  }
  return res;
}

var rightOrder = function (node) {
  // if (node != null){
  //   arguments.callee(node.left);
  //   arguments.callee(node.right);
  //   console.log(node.show());
  // }
  let arr = [];
  let res = [];
  let cur = node;
  let par = null;
  while (cur != null) {
    if (cur.left != null && cur.right != null){
      arr.push(cur);
      cur = cur.left;
    } else if (cur.left != null && cur.right == null){
      arr.push(cur);
      cur = cur.left;
    } else if (cur.left == null &&cur.right != null) {
      arr.push(cur);
      cur = cur.right;
    } else {
        res.push(cur.val);
      // console.log(cur.val);
      if (arr.length == 0){
        // console.log(par.val);
        res.push(par.val);
        break;
      }
      while(arr.length != 0) {
        par = arr.pop();
        if (cur == par.left){
          if ( par.right != null){
            cur = par.right;
            arr.push(par);
            break;
          } else {
          // console.log(par.val);
          res.push(par.val);
          cur = par;
          }
        } else {
          // console.log(par.val);
          res.push(par.val);
          if (par == node){
            return res;
          }
          cur = par;
          // par = arr.pop();
        }
      }
      
    }
  }
}
// 最小值
var findMini = function(node) {
  if (node == null){
    return;
  }else {
    var cur = node;
    while (cur.left != null) {
      cur = cur.left;
    }
    console.log(cur.show());
  }
}
// 找最大值
var findMax = function (node) {
  if (node == null) {
    return;
  } else {
    var cur = node;
    while (cur.right != null){
      cur = cur.right;
    }
    console.log(cur.show());
  }
}
// 二叉搜索树：查找
var find = function (node,val) {
  if (node == null){
    return;
  } else {
    let cur = node;
    while(cur != null){
      if (cur.val == val) {
        // console.log(cur);
        return cur;
        break;
      }else if(val < cur.val){
        cur = cur.left;
      }else if(val > cur.val){
        cur = cur.right;
      }
    }
    if (cur == null){
      console.log(false);
    }
  }
}
// 计数
var update = function(data) {
  let grade = find.call(this,this.root,data);
  grade.count++;
  // console.log(grade);
  return grade;
}

var bst = new BST();
bst.insert(10);
bst.insert(23);
bst.insert(5);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

// let res = bst.inOrder(bst.root);
let res = bst.leftOrder(bst.root);
// let res = rightOrder.call(bst,bst.root);
// console.log(res);

// findMini.call(bst,bst.root);
// findMax.call(bst,bst.root);
// let res = find.call(bst,bst.root,45);
// update.call(bst,45);
// let res = update.call(bst,45);
console.log(res);