function max_length (arr) {
    let len = arr.length;
    let temp = [];
    for (let i = 0; i< len; i++) {
        temp[i] = 1;
    }
    let res = 1;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                temp[i] = Math.max(temp[i], temp[j] + 1);
            }
        }
        res = Math.max(res, temp[i]);
    }
    console.log(res);
}

max_length([5,1,6,8,2,4,5,10]);