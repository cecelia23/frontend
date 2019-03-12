let map1=new Map();
map1.set('c',1);
map1.set('b',1);
map1.set('a',1);
let key1='c'
count1=map1.get(key1)
if (count1===undefined){
  count1=1;
  console.log(count1);
}else{
  count1=count1+1;
  map1.set(key1,count1);
  console.log(map1.get(key1))
}