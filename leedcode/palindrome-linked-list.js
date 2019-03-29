function ListNode(val){
  this.val = val;
  this.next - null;
}
function isPalindrome(head) {
  if (head == null){
    return true;
  }
  if (head.next == null) {
    return true;
  }
  let cur = head;
  let length = 1;
  while (cur.next != null){
    cur = cur.next;
    length++;
  }
  let mid= Math.ceil(length/2)+1;
  let len = 1;
  cur = head;
  while(len < mid){
    cur = cur.next;
    len++; 
  }
  let prev = cur;
  cur = cur.next;
  let c1 = cur;
  let c2 = prev;
  while(c1 != null){
    c1 = c1.next;
    if (prev == c2){
      prev.next = null;
    }
    cur.next = prev;
    prev = cur;
    cur = c1;
  }
  while(prev != null && prev.val == head.val){
    prev = prev.next;
    head = head.next;
  }
  if(prev != null){
    return false;
  }else{
    return true;
  }
}

let v1 = new ListNode(1);
let v2 = new ListNode(2);
let v3 = new ListNode(3);
let v4 = new ListNode(2);
let v5 = new ListNode(1);
// let v6 = new ListNode(1);

v1.next = v2;
v2.next = v3;
v3.next = v4;
v4.next = v5;
// v5.next = v6;

let res =  isPalindrome(v1);
console.log(res);