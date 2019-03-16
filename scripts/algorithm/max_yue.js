function yueshu(m,n){
  let temp,y;
  if (m>n){
    temp=m;
    m=n;
    n=temp;
  }
  y=n%m;
  console.log(y)
  while (y!=0) {
    n=m;
    m=y;
    y=n%m;
  }
  return m;
}
console.log(yueshu(319,377));