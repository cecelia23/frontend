function ListNode(val) {
    this.val = val;
    this.next = null;
}

var detectCycle = function(head) {
    if (head == null || head.next == null) {
        return "no cycle";
    }
    let slow = head;
    let fast = head.next;
    let len = 0;
    while(slow != null && fast != null && slow != fast) {
        slow = slow.next;
        fast = fast.next;
        if (fast != null){
            fast = fast.next;
        }
    }
    if (fast == slow) {
        let i=1;
        fast = fast.next;
        while(fast != slow) {
            i++;
            fast = fast.next;
        }
        len = i;
    }
    let cur = head, cur1 = head;
    while(len > 1) {
        cur = cur.next;
        len--;
    }
    while(cur.next != head){
        cur = cur.next;
        head = head.next;
    }
    i = 0;
    while(cur1.val != head.val){
        i++;
        cur1 = cur1.next;
    }
    return "tail connect to node index " + i;
};

var n1 =new  ListNode(1);
var n2 =new ListNode(2);
// var n3 =new ListNode(0);
// var n4 =new ListNode(-4);

// console.log(n1.val);
n1.next = n2;
n2.next = n1;
// n3.next = n4;
// n4.next = n2;

let res = detectCycle(n1);
console.log(res);

