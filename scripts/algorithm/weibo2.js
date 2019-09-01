function resort (arr) {
    let set = new Set(arr);
    let arr_1 = [...set];
    arr_1.sort((a,b) => {return b-a;});
    console.log(arr_1.join(','));
}

let res = resort([1,2,1,2,1,3]);
console.log(res);