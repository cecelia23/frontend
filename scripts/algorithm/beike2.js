function c_n3 (dot_num) {
    let sum = 1;
    for (let i = 0; i < 3; i++) {
        sum = sum * (dot_num - i) / (i + 1);
        // console.log(sum);
    }
    return sum;
}
function triangle (m, n) {
    let m_dot = m + 1;
    let n_dot = n + 1;
    let dot_num = n_dot * m_dot;
    let sum = c_n3(dot_num);
    let h_num = 0, w_num = 0, s_num = 0;
    if (m_dot >= 3) {
        let m_sum = c_n3(m_dot);
        h_num = n_dot * m_sum;
        // console.log(m_dot);
    }
    if (n_dot >= 3) {
        let n_sum = c_n3(n_dot);
        // console.log(n_dot);
        w_num = m_dot * n_sum;
    }
    while (m_dot >= 3 && n_dot >= 3) {
        let min = Math.min(m_dot, n_dot);
        s_num += (m_dot - min  + 1) * (n_dot - min + 1) * (min - 2) * 2;
        m_dot --;
        n_dot --;
    }
    let res = sum - h_num - w_num - s_num;
    console.log(res);
}
triangle(3,3);

function  num (m, n) {
    let res = 0;
    for(let i1 = 0; i1 < m + 1; i1++) {
        for(let j1 = 0; j1 < n + 1; j1++) {
            for(let i2 = 0; i2 < m + 1; i2++) {
                for(let j2 = 0; j2 < n + 1; j2++) {
                    for(let i3 = 0; i3 < m + 1; i3++) {
                        for(let j3 = 0; j3 < n + 1; j3++) {
                            if((i1 == i2 && i2 == i3) || (j1 == j2 && j2 == j3) || (i1 == i2 && j1 == j2) || (i1 == i3 && j1 == j3) || (i3 == i2 && j3 == j2)) {
                                continue;
                                //三点在一条线段上
                            } else if((i1 != i2 && i2 != i3 && j1 != j2 && j2 != j3 && j1 != j3 && i1 != i3 && (((j1 - j2) / (i1 - i2)) == ((j3 - j2) / (i3 - i2))))) {
                                continue;
                            } else{
                                res++;
                            }
                        }
                    }
                }
            }
        }
    }
    return res / 6;
}
console.log(num(3,3));