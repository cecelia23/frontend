function search(arr, left, right, target) {
    if (left > right) {
        return -1;
    }
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
        return mid;
    } else if (target > arr[mid]) {
        left = mid + 1;
        return search(arr, left, right, target);
    } else if (target < arr[mid]) {
        right = mid - 1;
        return search(arr, left, right, target);
    }
}

let arr = [1,2,3,4,5,6];
console.log(search(arr,0, 5, 5));