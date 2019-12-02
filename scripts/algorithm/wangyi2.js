function multiple (arr) {
    let a = arr[0];
    let b = arr[1];
    let p = arr[2];
    let q = arr[3];
    let temp = b - a;
    let count = 1;
    while (p < temp) {
        p *= q;
        count ++;
    }
    console.log(count);
}

multiple([1,5,7,2]);
multiple([3,5,1,2]);
multiple([1,15,4,2]);
multiple([12,19,3,2]);