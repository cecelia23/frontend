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