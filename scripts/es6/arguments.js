function mixArg(first='1',second){
  console.log(arguments.length);
  console.log(first===arguments[0]);
  console.log(second===arguments[1]);
  first ='c';
  seconde = 'd';
  console.log(first===arguments[0]);
  console.log(second===arguments[1]);
  
}
mixArg(undefined,2);