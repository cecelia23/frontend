var sortedArrayToBST = function(nums) {
    let mid = Math.floor(nums.length / 2);
    function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
    }
    let root = new TreeNode(nums[mid]);
    function toBST (nums, left, right, cur) {
      if (left > right || left < 0 || right >= nums.length) {
        return cur;
      }
      let mid = Math.floor((left + right) / 2);
      let val = cur.val;
      if (nums[mid] < val) {
        cur.left = new TreeNode(nums[mid]);
        cur = cur.left;
      } else {
        cur.right = new TreeNode(nums[mid]);
        cur = cur.right;
      }
      toBST(nums, left, mid-1, cur);
      toBST(nums, mid+1, right, cur);
    }
    toBST(nums, 0, mid-1, root);
    toBST(nums, mid+1, nums.length-1, root);
    return root;
};

let res = sortedArrayToBST([]);
console.log(res);