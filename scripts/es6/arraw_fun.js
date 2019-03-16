var sum=()=>{};

var sum1=(a,b)=>a+b;

var sum2=()=>'nickal';

let getItem=(id)=>({id:id,name:'alex'});

// sum();

// console.log(sum1(1,10));
// console.log(sum2());
// let item1=getItem();
// console.log(item1.name);
console.log(typeof sum);
console.log(typeof 1);
console.log(typeof '12');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof []);


// IIFE
let person=((name)=>{
  return {
    get firstName(){
      return name;
    },
    getName(){
      console.log(name);
    }
  }
})('nick');
console.log(person.firstName);
person.getName()