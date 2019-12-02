function count_one(num) {
    let count = 0;
    for(let i = 1; i <= num; i++) {
        let temp = i.toString();
        if (!temp.includes('1')) {
            continue;
        }
        let index = temp.indexOf('1');
        while (index != -1) {
            count ++;
            index = temp.indexOf('1', index + 1);
        }
    }
    console.log(count);
}
count_one(11);