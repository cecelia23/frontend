function reverse_compute (str) {
    let arr = str.split(' ');
    let stash = [];
    let temp;
    for (let i of arr) {
        if (/\d/.test(i)) {
            stash.push(i);
        } else {
            let num_2 = stash.pop();
            let num_1 = stash.pop();
            if (i === '+') {
                temp = Number(num_1) + Number(num_2);
                stash.push(temp);
            } else if (i === '-') {
                temp = Number(num_1) - Number(num_2);
                stash.push(temp); 
            } else if (i === '*') {
                temp = Number(num_1) * Number(num_2);
                temp = num_1 * num_2;
                stash.push(temp);
            } else if (i === '/') {
                temp = Number(num_1) / Number(num_2);
                stash.push(temp);
            }
        }
    }
    let res = stash.pop();
    console.log(res);
}

let str = '2 1 + 3 *';
reverse_compute(str);