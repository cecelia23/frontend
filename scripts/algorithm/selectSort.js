function selectSort(arr){
  for (var i=0;i<arr.length;i++){
    let k=i,t;
    for (var j=i+1;j<arr.length;j++){
      if (arr[j]<arr[k]){
        k=j;
      }
    }
    if (k!==i){
      t=arr[i];
      arr[i]=arr[k];
      arr[k]=t;
    }
  }
  return arr;
}
var arr=[6,5,4,3,2,1];
console.log(selectSort(arr));
