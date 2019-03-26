function Node(element){
  this.element=element;
  this.next=null;
  this.prev=null;
}
function Llist(){
  this.head=new Node('head');
}
Llist.prototype.find=function(item){
  let cur=this.head;
  while(cur.element!=item){
    cur=cur.next;
  }
  return cur;
}
Llist.prototype.findLast=function(){
  let cur=this.head;
  while(cur.next!=null){
    cur=cur.next;
  }
  return cur;
}
Llist.prototype.insert=function(newItem,item){
  let prev=this.find(item);
  let curNode=new Node(newItem); 
  let nextNode=prev.next;
  curNode.prev=prev;
  curNode.next=prev.next;
  prev.next=curNode;
  if (nextNode != null) {
    nextNode.prev = curNode;
  }
}
Llist.prototype.remove=function(item){
  let curNode=this.find(item);
  let prevNode=curNode.prev;
  prevNode.next=curNode.next;
}
Llist.prototype.display=function(){
  let cur=this.head;
  let str="";
  while(!(cur.next==null)){
    
    str += cur.next.element+" ";
    cur=cur.next;
  }
  console.log(str);
}
// var Llist1=new Llist();
// Llist1.insert('hello','head');
// Llist1.insert('jkp','hello');
// Llist1.insert('pi','jkp');
// Llist1.display();
// Llist1.remove('hello');
// Llist1.display();

// 在末尾插入
Llist.prototype.insertOne = function(item){
  let cur = this.head;
  while(cur.next!=null)
  {
    cur=cur.next;
  }
  let newNode = new Node(item)
  cur.next = newNode;
  cur.next.prev = cur;
}
// let Llist1 = new Llist();
// Llist1.insertOne(6);
// Llist1.insertOne(5);
// Llist1.insertOne(8);
// Llist1.insertOne(0);
// Llist1.insertOne(5);
// Llist1.insertOne(1);
// Llist1.insertOne(7);
// Llist1.display();

// 无序数字链表去重
// Llist.prototype.diff = function () {
//   let map=new Map();
//   let cur = this.head.next;
//   while (cur!=null) {
//     // this.display();
//     let judge=map.get(cur.element);
//     if (judge===undefined) {
//       map.set(cur.element,1);
//       cur = cur.next;
//     }else{
//       cur.prev.next=cur.next;
//       // console.log(cur.prev.next.elemet);
//       if (cur.next!=null)
//       {
//         cur.next.prev=cur.prev;
//         // cur.next.prev=cur.prev;
//       }
//       cur=cur.next;
//     }
//   }  
//   }
Llist.prototype.diff = function(){
  let cur = this.head;
  let map = new Map();
  while (cur.next!= null) {
    let val=map.get(cur.next.element);
    if (val === undefined) {
      map.set(cur.next.element,1);
      cur = cur.next;
    }else{
      cur.next = cur.next.next;
      if (cur.next!=null){
        cur.next.prev=cur;
      }
    }

  }
}
// var Llist1=new Llist();
// Llist1.insert(6,'head');
// Llist1.insert(5,6);
// Llist1.insert(8,5);
// Llist1.insert(6,8);
// Llist1.insert(0,6);
// Llist1.insert(5,0);
// Llist1.insert(6,5);
// Llist1.display();
// Llist1.diff();
// Llist1.display();


Llist.prototype.sort = function() {
  let cur = this.head.next;
  let t;
  var len = 0;
  let last=null;
  while(cur!=null){
    len++;
    cur=cur.next;
  }
  for (let i=1;i<len-1;i++) {
    cur=this.head.next;
    while (cur.next != last) {
      if (cur.next.element<cur.element){
        t = cur.next.element;
        cur.next.element = cur.element;
        cur.element = t;
      }
      cur = cur.next;
    }
    last=cur;
  }
 
}
let Llist1 = new Llist();
Llist1.insertOne(6);
Llist1.insertOne(5);
Llist1.insertOne(8);
Llist1.insertOne(0);
Llist1.insertOne(5);
Llist1.insertOne(1);
Llist1.insertOne(7);
Llist1.display();
Llist1.sort();
Llist1.display();



