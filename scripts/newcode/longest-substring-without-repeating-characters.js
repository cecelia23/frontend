function judge(s) {
    let j = 0, i = 0;
    let map = new Map();
    let len = 0;
    let res = 0;
    // for (i=0;i<s.length;i++){
    //     var k = map.get(s[i]);
    //     if (k == undefined){
    //         let str=s[i];
    //         map.set(s[i],1);         
    //     } else {
    //         // console.log(s[i]);
    //         res = i - j;
    //         map.clear();
    //         i = j;
    //         j = j+1;
    //         len = res > len ? res : len;
    //     }
    // }
    for (i=0;i<s.length;i++){
        var k = map.get(s[i]);
        if (k == undefined){
            let str=s[i];
            map.set(s[i],1);         
        } else {            
            if (s.lastIndexOf(s[i],i-1)<j){
                continue;
            }
            map.set(s[i],k+1);
            console.log(j,i);
            
            // console.log(s.lastIndexOf(s[i],i-1)+1);
            res = i - j;
            j = s.lastIndexOf(s[i],i-1)+1;
            // console.log(s[j]);
            len = res > len ? res : len;
            console.log(len);
        }
    }
    // console.log(map.get(s[i-1]));
    // if (map.get(s[i-1])==1){
        res = i - j;
    // }
    len = res > len ? res : len;
    return len;
//     if(s == null || s.length == 0)
//         return 0;
//     var charPos = new Array(256);
//     for (let i=0;i<256;i++){
//         charPos[i] = -1; 
//     }
//     // Arrays.fill(charPos, -1);
//     var res = 1;
//     var start = 0;
//     var i = 0;
//     var len = 0;
//     while(i < s.length) {
//         let num =s.charAt(i);
//         // console.log(charPos[s.charAt(i)]);
//         if(charPos[s.charAt(i) - 0] == -1) {
//             charPos[s.charAt(i) - 0] = i;
//             console.log(charPos[s.charAt(i) - 0]);
//         } else {
// //                len = i - start;
// //                res = res>=len?res:len;
// //                start = charPos[s.charAt(i) - 0] + 1;
// //                Arrays.fill(charPos, -1);
// //                //重置len
// //                for(int j = start; j <= i; j++) {
// //                    charPos[s.charAt(j) - 0] = j;
// //                }
//             if(charPos[s.charAt(i) - 0] >= start) {
//                 len = i - start;
//                 res = res>=len?res:len;
//                 start = charPos[s.charAt(i) - 0] + 1;
//                 console.log(start);
//             }
//             charPos[s.charAt(i) - 0] = i;
//         }
// //         i++;
//     }
//     len = i - start;
//     res = res>=len?res:len;
//     return res;
}
let res = judge("pwwkep");
console.log(res);