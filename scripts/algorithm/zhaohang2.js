function monster (arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] >= arr1[i]) {
            arr2[i] -= arr1[i];
            sum += arr1[i];
        } else {
            sum += arr2[i];
            arr2[i] = 0;
        }
        if (arr1[i+1] - arr2[i] >= 0) {
            arr1[i+1] -= arr2[i];
            sum += arr2[i];
        } else {
            sum += arr1[i + 1];
            arr1[i + 1] = 0;
        }
    }
    console.log(sum);
}
let arr1 = [1,2,2];
let arr2 = [4,1];
monster(arr1, arr2);