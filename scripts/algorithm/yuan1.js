function decompress (str) {
    let arr = deQuote(str);
    // while (arr) {
        let right_idx = arr[0];
        let left_idx = arr[1];
        for (var i = right_idx + 1; i < str.length; i++) {
            if (str.charAt(i) < '0' || str.charAt(i) > '9') {
                break;
            }
        }
        let s = str.substring(right_idx + 1, i);
        let times = parseInt(s);
        let inner = str.slice(left_idx+1, right_idx);
        str = str.slice(0, left_idx) + inner.repeat(times) + str.slice(i);
        console.log(str);
    //     arr = deQuote(str);
    // }
    

}

function deQuote (str) {
    let left = [], right = [];
    var idx = str.indexOf('(');
    while (idx !== -1) {
        left.push(idx);
        idx = str.indexOf('(', idx + 1);
    }
    var ridx = str.indexOf(')');
    while (ridx !== -1) {
        right.push(ridx);
        ridx = str.indexOf(')', ridx + 1);
    }
    console.log(left, right);
    let right_idx = right.pop();
    let left_idx =  left.shift();
    return [right_idx, left_idx];
}


let res = decompress('((A2B)02C)02G');
// A10B
// (AA)2A
// ((A2B)2)2G
// (YUANFUDAO)2JIAYOU
// A2BC4D2