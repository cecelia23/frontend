function ListNode(val){
  this.val = val;
  this.next = null;
}

// function middleNode(head){
//   if (head.next == null){
//     return head;
//   }
//   let cur = head;
//   let length = 0;
//   while(cur != null) {
//     length++;
//     cur = cur.next;
//   }
//   let mid = Math.floor(length/2)+1;
//   cur = head;
//   for (let i=1;i<mid;i++){
//     cur = cur.next;
//   }
//   return cur;
// }

function middleNode(head){
  let fast = head;
  let slow = head;
  while(fast != null){
    fast = fast.next;
    if (fast != null){
      fast = fast.next;
      slow = slow.next;
    }
  }
  return slow;
}

let v1 = new ListNode(1);
let v2 = new ListNode(2);
let v3 = new ListNode(3);
let v4 = new ListNode(4);
let v5 = new ListNode(5);

v1.next = v2;
v2.next = v3;
v3.next = v4;
v4.next = v5;

let res = middleNode(v1);
console.log(res);

