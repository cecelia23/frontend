function exchange (n, arr) {
    for (let i = 0; i < n - 1; i++) {
        let obj = Math.min(...arr.slice(i));
        let num = arr.indexOf(obj);
        if ((arr[i] + obj) % 2 === 1) {
            let temp = arr[i];
            arr[i] = obj;
            obj = temp;
        }
        arr.splice(num, 1, obj);
    }
    console.log(arr);
    // return arr;
} 

exchange(4, [7, 3, 5, 1]);

