function mount (str) {
    let arr = str.split(' ');
    let len = arr.length;
    let status = 0;
    let count = 0;
    for (let i = 0; i < len - 1; i++) {
        j = i + 1;
        let size = 0;
        if (arr[i] < arr[j] && status === 0) {
            size++;
        } else if (arr[j] < arr[i] && status === 0) {
            size++;
            status = 1;
            console.log(size);
        } else if (arr[j] < arr[i] && status === 1) {
            size++;
        }
        else if (arr[i] < arr[j] && status === 1) {
            if (size > count) {
                count = size;
                console.log(count);
            }
            size = 1;
            status = 0;
        }
    }
    return count;
}
let len = mount('9 2 5 8 4 1 7');
console.log('res', len);
