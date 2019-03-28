function ListNode(val){
  this.val=val;
  this.next = null;
}

var getIntersectionNode = function(headA, headB){
  let c1=headA;
  let c2=headB;
  let i=0,j=0;
  while(c1!=null){
    i++;
    c1=c1.next;
  }
  while(c2!=null){
    j++;
    c2=c2.next;
  }
  while(i>j){
    headA=headA.next;
    i--;
  }
  while(j>i){
    headB=headB.next;
    j--;
  }
  
  while(headA!=null && headB !== null && headA!=headB){
    headA = headA.next;
    headB = headB.next;
  }
  // if (headA == null||headB == null){
  //   return headA;
  // }
  return headA;
}

let hA1=new ListNode(4);
let hA2=new ListNode(1);
let hA3=new ListNode(8);
let hA4=new ListNode(4);
let hA5=new ListNode(5);

let hB1=new ListNode(5);
let hB2=new ListNode(0);
let hB3=new ListNode(1);

hA1.next = hA2;
hA2.next = hA3;
hA3.next = hA4;
hA4.next = hA5;
hB1.next = hB2;
hB2.next = hB3;
hB3.next = hA3;
// hB1.next = hA4;

let res=getIntersectionNode(hA1,hB1);
console.log(res);