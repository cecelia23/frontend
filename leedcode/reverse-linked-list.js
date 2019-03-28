function ListNode(val) {
  this.val = val;
  this.next = null;
}

function reverseList(head){
  if (head == null) {
    return null;
  }
  if (head.next == null) {
    return head;
  }
  let prev=head;
  let cur = head.next;
  let c1 = cur;
  if (prev == head){
    prev.next = null;
  }
  while (c1 !== null) {
    c1 = c1.next;
    cur.next = prev;
    prev = cur;
    cur = c1;
  }
  return prev;
}

function display(head) {
  let cur = head;
  while (cur !== null) {
    console.log(cur.val);
    cur = cur.next;
    }
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

  let v=reverseList(v1);
  display(v);