var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    let head, cur;
    if (l1.val <= l2.val) {
        cur = l1;
        l1 = l1.next;
    } else {
        cur = l2;
        l2 = l2.next;
    }
    head = cur;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    if (l1) {
        cur.next = l1;
    }
    if (l2) {
        cur.next = l2;
    }
    return head;
};
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let v1 = new ListNode(1);
let v2 = new ListNode(2);
let v3 = new ListNode(4);
v1.next = v2;
v2.next = v3;
let n1 = new ListNode(1);
let n2 = new ListNode(3);
let n3 = new ListNode(4);
n1.next = n2;
n2.next = n3;
let res = mergeTwoLists(v1, n1);
