function merge(str1, str2) {
    let arr1 = str1.split(' ');
    let arr2 = str2.split(' ');
    let len1 = arr1.length;
    let len2 = arr2.length;
    let res = [];
    let j = 0;
    for (let i = 1; i <= len1; i++) {
        if (i % 4 === 0) {
            if (j < len2) {
                res.push(arr1[i-1], arr2[j]);
                j++;
            } else {
                res.push(arr1[i-1]);
            }
        } else {
            res.push(arr1[i-1]);
        }
    }
    if (len1 < 4 * len2) {
        while (j < len2) {
            res.push(arr2[j]);
            j++;
        }
    }
    let str = res.join(' ');
    console.log(str);
}

let str1 = '1 2 3 4 5 6 7 8 9 10 11';
let str2 = 'a b c d e';
 merge(str1, str2);