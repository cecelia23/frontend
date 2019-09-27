function ListNode(val) {
  this.val = val;
  this.next = null;
}
var getIntersectionNode = function(headA, headB) {
  let c1 = headA;
  let c2 = headB;
  let i = 0, j = 0;
  while (c1.next !== null) {
    i++;
    c1 = c1.next;
  }
  while (c2.next !== null) {
    j++;
    c2 = c2.next;
  }
  while(i > j) {
    headA = headA.next;
    i--;
  }
  while(j > i) {
    headB = headB.next;
    j--;
  }
  while (headA !== null && headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }
  return headA;
}
let a1 = new ListNode(4);
let a2 = new ListNode(1);
let b1 = new ListNode(5);
let b2 = new ListNode(0);
let b3 = new ListNode(1);
let c1 = new ListNode(8);
let c2 = new ListNode(4);
a1.next = a2;
a2.next = c1;
b1.next = b2;
b2.next = b3;
b3.next = c1;
c1.next = c2;
let res = getIntersectionNode(a1,b1);
console.log(res);