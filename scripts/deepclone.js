var obj={
  name:{
    age:20
  }
};
jsonObj=JSON.stringify(obj);
obj1=JSON.parse(jsonObj);

obj1.name.age=10;
console.log(obj.name.age)