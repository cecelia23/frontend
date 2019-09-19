function Node (val) {
    this.value = val;
    this.next = null;
}

function derepeated (node) {
    let cur = node;
    let tag = 0, time = 0;
    let temp = cur.value; 
    let head, prev, p;
    while (cur.next) {
        prev = cur;
        cur = cur.next;
        if (cur.value === temp) {
            tag ++;
            continue;
        } else {
            temp = cur.value;
            if (tag === 0) {
                if (!time) {
                    head = prev;
                    p = prev;
                    time = 1;
                } else {
                    p.next = prev;
                    p = p.next;
                }
            } else {
                tag = 0;
            }
        }
    }
    if (!tag) {
        p.next = cur;
    }
    return head;
}
let node1 = new Node(1);
let node2 = new Node(1);
let node3 = new Node(2);
let node4 = new Node(3);
let node5 = new Node(3);
let node6 = new Node(4);
let node7 = new Node(4);
let node8 = new Node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;

console.log(derepeated(node1));
