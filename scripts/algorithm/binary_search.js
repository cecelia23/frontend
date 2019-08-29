function search(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            left = mid + 1;
        } else if (target < arr[mid]) {
            right = mid -1;
        }
    }
    return -1;
}

let arr = [1,2,3,4,5,6];
console.log(search(arr,7));