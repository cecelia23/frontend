function huiwen (n, k) {
    let start;
    if (n === 1) {
        start = 0;
    } else {
        start = 10 ** (n - 1);
    }
    let end = 10 ** n - 1;
    let res = 0;
    for (let i = start; i <= end; i++) {
        let str = i.toString();
        let len = str.length;
        let j = 0;
        let mid = Math.floor(len / 2);
        while (j <= mid) {
            if (str[j] != str[len - 1 -j]) {
                break;
            } else {
                j++;
            }
        }
        if (j === mid + 1) {
            res++;
        }
        if (res === k) {
            return i;
        }
    }
}

let res = huiwen(5, 201);
console.log(res);