function ListNode(val) {
    this.val = val;
    this.next = null;
 }

let head1=new ListNode(1);
let head2=new ListNode(1);
let head3=new ListNode(2);
// let head4=new ListNode(3);
// let head5=new ListNode(3);
head1.next=head2;
head2.next=head3;
// head3.next=head4;
// head4.next=head5;

var deleteDuplicates = function(head) {
  if (head==null){
    return null;
  }
  let prev=head;
  let cur=head.next;
  
  
  
  while (cur!=null) {
    if (prev.val === cur.val) {
        prev.next=cur.next;
    }else{
      prev = prev.next;
    }
    cur = cur.next;
  }
  return head;
};
// display(head1);
h_new=deleteDuplicates(head1);
display(h_new);

function display(head){
  let cur=head;
  let str="";
  while (cur!=null){
    str += cur.val + " ";
    cur = cur.next;
  }
  console.log(str);
}
