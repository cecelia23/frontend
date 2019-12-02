function findNum (x) {
    let temp = x;
    let res = '';
    while (temp > 9) {
        temp -= 9;
        res = 9 + res;
    }
    res = temp + res;
    console.log(res);
}

let num = 20;
findNum(num);