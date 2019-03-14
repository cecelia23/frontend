var obj={
  name:{
    age:20
  }
};

//shalow clone
function shalowClone(obj){
  var cloneObj={};
  for (attr in obj){
    cloneObj[attr]=obj[attr];
  }
  return cloneObj;
}

function deepClone(obj){
  var cloneObj={};
  if (typeof obj !='object'){
    return obj;
  }
    for (attr in obj){
      cloneObj[attr]=deepClone(obj[attr]);
    }
   return cloneObj;
}

var obj1=deepClone(obj);
obj1.name.age=10;
console.log(obj.name.age)
console.log(obj1.name.age)