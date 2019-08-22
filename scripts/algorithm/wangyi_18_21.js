function divideThree (l, r) {
    let res = 0;
    let sum = 0;
    for (let i = 1; i < l; i++) {
        sum += i;         
    }
    for (let i = l; i <= r; i++) {
        sum += i;
        let remaind = sum % 3;
        if (remaind === 0) {
            res += 1;
        } 
    }
    console.log(res);
}

let res = divideThree(1, 5);
