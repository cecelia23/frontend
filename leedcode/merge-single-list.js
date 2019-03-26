function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1=new ListNode(-9);
var l1_2=new ListNode(3);
// var l1_3=new ListNode(4);
l1.next=l1_2;
// l1_2.next=l1_3;
var l2 = new ListNode(5);
var l2_2=new ListNode(7);
// var l2_3=new ListNode(4);
l2.next=l2_2;
// l2_2.next = l2_3;

var mergeTwoLists = function(l1, l2) {
  if (l1 == null) {
    return l2;
  }
  if (l2 == null) {
      return l1;
  }
  let l3=new ListNode(),
  c3=l3;
  let c1=l1;
  let c2=l2;
  let v1,v2;
  while(c1!=null && c2 != null){
      v1=c1.val;
      v2=c2.val;
      if (v1<=v2){
        if (c3.val == undefined){
          c3=c1;
          l3=c1;
        }else{
          c3.next = c1;
          c3 = c3.next;
        }
          c1 = c1.next;
      }else{
        if (c3.val == undefined){
          c3= c2;
          l3 = c2;
        }else{
          c3.next = c2;
          c3 = c3.next;
        }
          c2 = c2.next;
      }
  }
  if (c1==null){
      while(c2!=null){
          c3.next=c2;
          c2=c2.next;
          c3=c3.next;
      }
  }
  if(c2 == null) {
      while(c1 != null) {
          c3.next=c1;
          c1 = c1.next;
          c3=c3.next;
      }
  }
  return l3;   
};

var display=function(l){
  var str="";
  while(l!==null) {
    str+= l.val+" ";
    l=l.next;
  }
  console.log(str);
}
var l=mergeTwoLists(l1,l2);
display(l);