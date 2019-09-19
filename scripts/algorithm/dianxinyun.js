function huiwen (num) {
    let str = num.toString();
    let i = 0;
    while (i <= 2) {
        if (str[i] !== str[4 - i]) {
            break;
        } else {
            i++;
        }
    }
    if (i === 3) {
        console.log('this number is a huiwen');
    }
}

let num = 12311;
huiwen(num);