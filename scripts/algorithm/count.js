function count (a, b, k) {
    let temp = [];
    let res = 0;
    for (let i = a; i <= b; i++) {
        if (i % k === 0) {
            temp.push(i);
        }
    }
    for (let item of temp) {
        let i = 2;
        while (i < k) {
            if (item % i === 0) {
                break;
            } else {
                i++;
            }
        }
        if (i === k) {
            res++;
        }
    }
    console.log(res);   
}

let rs = count(6,19,5);
