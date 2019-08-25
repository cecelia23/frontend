function version (v, s) {
    let v_arr = v.split('.');
    let s_arr = s.split('.');
    for (let i = 0; i < 4; i++) {
        if (v_arr[i] === undefined) {
            v_arr[i] = 0;
        } else {
            v_arr[i] = parseInt(v_arr[i]);
        }
        if (s_arr[i] === undefined) {
            s_arr[i] = 0;
        } else {
            s_arr[i] = parseInt(s_arr[i]);
        }
        if (v_arr[i] < s_arr[i]) {
            return true;
        } else if (v_arr[i] > s_arr[i]) {
            return false;
        }
    }
    return false;
}

let res = version('1.2', '1.19');
console.log(res);