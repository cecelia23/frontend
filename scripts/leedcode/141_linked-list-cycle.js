function ListNode(val) {
  this.val = val;
  this.next = null;
}


var hasCycle = function(head) {
    if (head === null) {
      return false;
    }
    let slow = head.next, fast = head;
    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      } else {
        slow = slow.next;
      }
    }
    return false;
};

let head = new ListNode(3);
let node1 = new ListNode(2);
let node2 = new ListNode(0);
let node3 = new ListNode(-4);

head.next = node1;
node1.next = node2;
node2.next = node3;
// node3.next = node1;
// node1.next = head;

let res = hasCycle(head);
console.log(res);