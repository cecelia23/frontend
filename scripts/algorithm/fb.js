var fn = function (n) {
    let a = 0, b = 1;
    let c;
    if(n==0){
        
    }
    for (let i = 1; i<= n;i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
let res = fn(5);
console.log(res);