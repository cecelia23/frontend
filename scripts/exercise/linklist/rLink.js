function Node(ele){
  this.element = ele;
  this.next = null;
}
function Llist(){
  this.head=new Node('head');
  // 循环链表
  this.head.next=this.head;
}

Llist.prototype.find = function (item) {
  let cur=this.head;
  while (cur.next.element!='head'&&cur.next.element!=item) {
    cur=cur.next;
  }
  if (cur.next.element==item){
    return cur.next;
  } 
}

Llist.prototype.insert = function (newItem,item) {
  let curNode = this.find(item);
  let newNode = new Node(newItem);
  newNode.next=curNode.next;
  curNode.next=newNode;
}

Llist.prototype.findPrev = function (item) {
  let cur=this.head;
  while (cur.next.element != item && cur.next.element != 'head'){
    cur=cur.next;
  }
  if (cur.next.element == item) {
    return cur;
  }
}

Llist.prototype.remove = function (item) {
  let prevNode=this.findPrev(item);
  prevNode.next=prevNode.next.next;
}

Llist.prototype.display = function () {
  let cur=this.head;
  while (cur.next.element != 'head') {
    console.log (cur.next.element);
    cur = cur.next;
  }
}

var Llist1=new Llist();
Llist1.insert('hello','head');
Llist1.insert('jkp','hello');
Llist1.insert('pi','jkp');
Llist1.display();
Llist1.remove('hello');
Llist1.display();