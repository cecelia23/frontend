function quickSort(left,right){
  if(left>=right){
    return;
  }
  var temp=arr[left],i=left,j=right,t;
  while(i!=j){
    while(i<j&&arr[j]>=temp){
      j--;
    }
    while(i<j&&arr[i]<=temp){
      i++;
    }
    if(i!=j){
      t=arr[i];
      arr[i]=arr[j];
      arr[j]=t;
    }
  }
  
  arr[left]=arr[i];
  arr[i]=temp;
  quickSort(left,i-1);
  quickSort(i+1,right);
}
var arr=[4,5,6,3,7,0,1];
quickSort(0,arr.length-1);
console.log(arr);
