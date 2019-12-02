function cost (str1, str2) {
    if (str1 > str2) {
        return 0;
    }
    let y1 = parseInt(str1.slice(0,4));
    let y2 = parseInt(str2.slice(0,4));
    let m1 = parseInt(str1.slice(4,6));
    let m2 = parseInt(str2.slice(4,6));
    let d1 = parseInt(str1.slice(6,8));
    let d2 = parseInt(str2.slice(6,8));
    let h1 = parseInt(str1.slice(8,10));
    let h2 = parseInt(str2.slice(8,10));
    let min1 = parseInt(str1.slice(10,12));
    let min2 = parseInt(str2.slice(10,12));
    // let dat1 = new Date(str1);
    // let dat2 = new Date(str2);
    // console.log(dat2-dat1);
    let dat1 = d1 * 60 * 24 + h1 * 60 + min1;
    let dat2 = d2 * 60 * 24 + h2 * 60 + min2;
    let diff = dat2 - dat1;
    if (diff <= 30) {
        return 0
    } else if (diff <= 480) {
        let val = Math.ceil(diff / 60) * 10;
        return val;
    } else {
        return 80;
    }

}
console.log(cost('201903010000', '201903010100'));