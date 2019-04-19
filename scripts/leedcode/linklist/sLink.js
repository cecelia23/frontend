function Node(element){
  this.element=element;
  this.next=null;
}
function Llist(){
  this.head=new Node('head');
}
Llist.prototype.find=function(item){
  let curNode=this.head;
  while(!(curNode.next==null)&&(curNode.element!=item)){
    curNode=curNode.next;
  }
  // if (curNode==null){
  //   return;
  // }
  return curNode;

};
Llist.prototype.findPrev=function(item){
  let cur=this.head;
  while(!(cur.next==null)&&(cur.next.element!=item)){
    cur=cur.next;
  }
  if(!(cur.next==null)){
    return cur;
  }
};
Llist.prototype.insert=function(newNode,element){
  let curNode=this.find(element);
  newNode.next=curNode.next;
  curNode.next=newNode;
};
Llist.prototype.remove=function(element){
  let preNode=this.findPrev(element);
  preNode.next=preNode.next.next;
};
Llist.prototype.display=function(){
  let cur=this.head;
  while(cur.next!=null){
    console.log(cur.next.element);
    cur=cur.next;
  }
};
var Llist1=new Llist();
Llist1.insert(new Node('hello'),'head');
Llist1.insert(new Node('jkp'),'hello');
Llist1.insert(new Node('pi'),'jkp');
Llist1.display();
Llist1.remove('hello');
Llist1.display();
