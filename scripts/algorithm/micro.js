function braces(values) {
    let test = ["()", "[]", "{}"];
    let res = [];
    for (let value of values) {
        let time = 0;
        let last;
        while (last != time) {
            last = time;
            for (let i of test) {
                if (value.includes(i)) {
                    let index = value.indexOf(i);
                    value = value.slice(0, index) + value.slice(index + 2);
                    time ++;
                }
            }
        }
        if (value.length !== 0) {
            res.push('NO')
        } else {
            res.push('YES');
        }
    }
    return res;
    // console.log(values);
}
let res = braces(['(){[}]','(){}[]']);
console.log(res);