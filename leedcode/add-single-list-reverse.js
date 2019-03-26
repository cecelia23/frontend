function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1=new ListNode(9);
var l1_2=new ListNode(8);
// var l1_3=new ListNode(3);
l1.next=l1_2;
// l1_2.next=l1_3;
var l2 = new ListNode(1);
// var l2_2=new ListNode(6);
// var l2_3=new ListNode(4);
// l2.next=l2_2;
// l2_2.next = l2_3;

var addTwoNumbers = function(l1, l2) {
  let c1=l1,c2=l2;
  let v1,v2,sum,tg=0;
  let l3 = new ListNode(),
  c3=l3;
    while (c1!=null && c2!=null){
      if (c3.val !=undefined){
        c3.next=new ListNode();
        c3=c3.next;
      }
      v1=c1.val;
      v2=c2.val;
      sum=v1+v2+tg;
      if (sum>=10){
        tg = Math.floor(sum / 10);
        sum = sum % 10;
      }else{
        tg = 0;
      }
      c3.val=sum;
      if (l3.val == undefined){
        l3=c3;
      }
      // else{
      //   c3.next = new ListNode();
      //   }
      c1=c1.next;
      c2=c2.next;
    }
    if (c1==null){
      while (c2!= null){
        c3.next = new ListNode();
        c3 =c3.next;
        sum =c2.val + tg;
        if (sum>=10){
          tg = Math.floor(sum / 10);
          sum = sum % 10;
        }else{
          tg =0;
        }
        c3.val=sum;
        c2=c2.next;
      }
    }
     if (c2==null){
      while(c1 != null){
        c3.next = new ListNode();
        c3 =c3.next;
        sum = c1.val + tg;
        if (sum >= 10){
          tg = Math.floor(sum / 10);
          sum = sum % 10;
        }else{
          tg =0;
        }
        c3.val = sum;
        c1 = c1.next;
      }
    }
    if (c1 == null && c2 == null && tg!=0){
        c3.next = new ListNode();
        c3 =c3.next;
        c3.val=tg;
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
var l=addTwoNumbers(l1,l2);
display(l);