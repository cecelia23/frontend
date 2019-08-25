function one (num) {
    let arr = [];
    let temp;
    while (num !== 0) {
        temp = num % 10;
        arr.unshift(temp);
        num = Math.floor(num / 10);
    }
    let sum = 0;
    for (let i of arr) {
        sum += i*i;
    }
    return sum;
}

let sum = one(19);
let set = new Set();
while(sum !== 1 && !set.has(sum)) {
    set.add(sum);
    sum = one(sum);
}
if (set.has(sum)) {
    console.log(false);
} else if (sum === 1) {
    console.log(true);
} 