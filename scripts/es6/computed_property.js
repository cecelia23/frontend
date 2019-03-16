let person={};
let last_name='flat';
person[last_name]='nickal';
console.log(person[last_name]);

var suffix="name";
var person1={
  ["first "+suffix]:'nickal',
  ["last "+suffix]:'zakas'
};
console.log(person1["first name"]);
console.log(person1["last name"]);