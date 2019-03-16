function random(a,b){
  return Math.floor(Math.random()*(b-a+1)+a);
}
for (var i=0;i<10;i++){
  console.log(random(0,100));
}

