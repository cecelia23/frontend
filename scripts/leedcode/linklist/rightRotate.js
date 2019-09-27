function LinkNode (val) {
  this.val = val;
  this.next = null;
}
function rightRotate (head, k) {
  if (!head) {
    return;
  }
  let cur = head;
  let count = 1;
  while (cur.next) {
    count++;
    cur = cur.next;
  }

  let r = k % count;
  let move = count - r;
  let node = head;
  if (move !== count) {
    cur = head;
    let p = 1;
    while (p < move) {
      cur = cur.next;
      p++;
    }
    node = cur.next;
    cur.next = null;
    cur = node;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = head;
  }
  cur = node;
  while (cur.next) {
    console.log(cur.val);
    cur = cur.next;
  }
  console.log(cur.val);
}

let v1 = new LinkNode(1);
let v2 = new LinkNode(2);
let v3 = new LinkNode(3);
v1.next = v2;
v2.next = v3;

rightRotate(v1, 4);

