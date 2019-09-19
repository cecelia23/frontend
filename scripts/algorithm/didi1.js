function helper (str, idx, k) {
    let i = 0;
    let count = 0;
    while (i < str.length) {
        if (str.charCodeAt(i) - 'a'.charCodeAt(0) == idx) {
            i++;
        } else {
            i += k;
            count++;
        }
    }
    return count;
}

function times (k, str) {
    let exist = new Array();
    for (let i = 0; i < 26; i++) {
        exist[i] = false;
    }
    for (let i = 0; i < str.length; i++) {
        exist[str.charCodeAt(i) - 'a'.charCodeAt(0)] = true;
    }
    let std = 10 ** 4;
    for (let i = 0; i < 26; i++) {
        if (exist[i]) {
            let r = helper(str, i, k);
            if (r < std) {
                std = r;
            }
        }
    }
    console.log(std);
}

times(3, 'abcba');