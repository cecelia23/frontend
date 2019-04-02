function ListNode(val){
  this.val = val;
  this.next = null;
}

function deleteDuplicates(head) {
  if (head == null){
    return head;
  }
  if (head.next == null) {
    return head;
  }
  var cur = head;
  
  var next1 = head;
  var next2 = next1.next;
  var flag = 0;
  var change = false;

  while(next2!=null){
    while(next2 !=null && next2.val == next1.val) {
      flag++;
      next1 = next1.next;
      next2= next2.next;
    }
    while (next2 !=null && next2.val != next1.val) {
      if (flag !== 0){
        flag = 0;
      }else{
        change = true;
        cur.val = next1.val;
        cur = cur.next;
      }
      next1 = next1.next;
      next2 = next2.next;
    }
  }

  if (next2 == null){
    if (flag == 0){
      cur.val = next1.val;
      cur.next = null;
    }else{
      if (change == false){
        return null;
      }else{
        cur.next = null;
        cur = head;
        while(cur.next.next!=null){
          cur =cur.next;
        }
        cur.next = null;
        }
      }
    }
  return head;
}

var v1 = new ListNode(1);
var v2 = new ListNode(1);
var v3 = new ListNode(1);
// var v4 = new ListNode(3);
// var v5 = new ListNode(4);
// var v6 = new ListNode(4);
// var v7 = new ListNode(5);
// var v8 = new ListNode(6);


v1.next = v2;
v2.next = v3;
// v3.next = v4;
// v4.next = v5;
// v5.next = v6;
// v6.next = v7;
// v7.next = v8;

var res = deleteDuplicates(v1);
if (res == null){
  console.log('[]');
}
while (res != null){
  console.log(res.val);
  res = res.next;
}

// console.log(res);