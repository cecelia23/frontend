function findMin (num1, num2) {
    let tag1 = num1;
    for (let i = num1; i <= num2; i++) {
        let rest = i % 2019;
        if (rest < tag1) {
            tag1 = rest;
        }
    }
    console.log(tag1 * (tag1 + 1));
}
findMin(2019,2040);
