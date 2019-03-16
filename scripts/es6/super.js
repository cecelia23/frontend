let person={
  getGreeting(){
    return 'hello';
  }
}
let dog={
  getGreeting(){
    return 'woof';
  }
}

let friend={
  getGreeting(){
    return super.getGreeting()+',hi'
  }
}
Object.setPrototypeOf(friend,person);
console.log(friend.getGreeting())