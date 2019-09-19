function isQuote (str) {
    if (str === '') {
        return true;
    }
    let temp = [];
    let i = 0;
    let tag = 0;
    let len = str.length;
    while (i < len) {
        if (str[i] === '}') {
            tag = 0;
            if (temp.length === 0) {
                return false;
            }
            let s = temp.pop();
            if (s !== '{') {
                return false;
            }
        } else if (str[i] === ']') {
            if (tag === 2) {
                tag = 0;
            }
            if (temp.length === 0) {
                return false;
            }
            let s = temp.pop();
            if (s !== '[') {
                return false;
            }
        } else if (str[i] === ')') {
            if (tag === 1) {
                tag = 0;
            }
            if (temp.length === 0) {
                return false;
            }
            let s = temp.pop();
            if (s !== '(') {
                return false;
            }
        } else if (str[i] === '{') {
            if (tag === 1 || tag === 2 || tag === 3) {
                return false;
            }
            temp.push(str[i]);
            if (tag < 3) {
                tag = 3;
            }
        } else if (str[i] === '[') {
            if (tag === 1 || tag === 2) {
                return false;
            }
            temp.push(str[i]);
            if (tag < 2) {
                tag = 2;
            }
        } else {
            if (tag === 1) {
                return false;
            }
            temp.push(str[i]);
            if (tag < 1) {
                tag = 1;
            }
        }
        i++;
    }
    return true;
}

let str = '[[]]({})';
console.log(isQuote(str));