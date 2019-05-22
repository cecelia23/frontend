var water = function(n) {
    if (n == 1) {
        return 1;
    }
    let sum;
    let child,parent;
    parent = Math.pow(2,n-1);
    child = parent * 2 - 1;
    return child + "/" + parent;
}
let n=4;
let res = water(n);
console.log(res);