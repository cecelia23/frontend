function numOfxy (n, k) {
    let sum = 0;
    let res = [];
    for (let i = k; i <= n; i++) {
        for (let j = k + 1; j <= n; j++) {
            if (i % j >= k) {
                sum += 1;
                res.push([i, j]);
            }
        }
    }
    console.log(sum);
    console.log(res);
}

numOfxy(5, 2);