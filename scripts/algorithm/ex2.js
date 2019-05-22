function max_length(s){
    let size = 0;
    let arr = [];

    for (let i=0;i<s.length;i++){
        if (s[i] == 1){
            size++;
        }else if(s[i] == 0){
            arr.push(size);
            size = 0;
        }      
    }
    arr.push(size);
    var max_size = Math.max.apply(Math,arr);
    if (max_size == s.length){
        return max_size;
    }
    if (s[0] ==0 || s[s.length-1] == 0){
        // console.log(max_size);
        return max_size;
    } else {
        let j = 0;

        while(s[j]!=0){
            j++;
        }
        let k = s.length-1;
        while(s[k]!=0){
            k--;
        }
        var max_size1 = j+s.length-1-k;
        // console.log(max_size1);
        arr.push(max_size1);
        max_size = Math.max.apply(Math,arr);
        // console.log(max_size);
        return max_size;
    }
}
let res = max_length("1111111");
console.log(res);