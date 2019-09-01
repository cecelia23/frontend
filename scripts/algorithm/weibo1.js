function max_sum (str) {
    let arr = str.split(',');
    for (let i in arr) {
        arr[i] = parseInt(arr[i]);
    }
    console.log(arr)
    let std = 0;
    let temp = 0;
    let head = 0, tail = 0, begin = 0;
    let res = '';
    for (let i in arr) {
        if (temp > 0) {
            temp += arr[i];
        } else {
            temp = arr[i];
            begin = i;
        }
        if (temp > std) {
            // console.log(std);
            std = temp;
            head = begin;
            tail = i;
        }  
    }
    res += std + '|';
    for (let i = head; i <= tail; i++) {
        if (i > head) {
            res += ','
        }
        res += arr[i];
    }
    console.log(res);
}

let arr = "1, -3, 7, 8, -4, 12, -10, 6";
max_sum(arr);