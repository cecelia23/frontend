// var isValid = function(s) {
//     if (s === '') {
//         return true;
//     }
//     if (s.length % 2 === 1) {
//         return false;
//     }   
//     while (s.length) {
//         let s_start_len = s.length;
//         for (let i = 0; i < s.length; i++) {
//             let arr = [];
//             if (arr.includes(i)){
//                 continue;
//             } else {
//                 if (s[i] === '(') {
//                     let idx_end = s.indexOf(')', i);
//                     if (idx_end === -1) {
//                         return false;
//                     } else if ((idx_end - i) === 1) {
//                         let s1 = s.slice(0, i);
//                         let s2 = s.slice(idx_end + 1);
//                         s = s1.concat(s2);
//                         break;
//                     } else {
//                         arr.push(idx_end);
//                     }
//                 } else if (s[i] === '[') {
//                     let idx_end = s.indexOf(']', i);
//                     if (idx_end === -1) {
//                         return false;
//                     } else if ((idx_end - i) === 1) {
//                         let s1 = s.slice(0, i);
//                         let s2 = s.slice(idx_end + 1);
//                         s = s1.concat(s2);
//                         break;
//                     } else {
//                         arr.push(idx_end);
//                     }
//                 } else if (s[i] === '{') {
//                     let idx_end = s.indexOf('}', i);
//                     if (idx_end === -1) {
//                         return false;
//                     } else if ((idx_end - i) === 1) {
//                         let s1 = s.slice(0, i);
//                         let s2 = s.slice(idx_end + 1);
//                         s = s1.concat(s2);
//                         break;
//                     } else {
//                         arr.push(idx_end);
//                     }
//                 }
//             }   
//         }
//         if (s.length === s_start_len) {
//             return false;
//         }
//     }  
//     return true;
// };
var isValid = function(s) {
    if (s === '') {
        return true;
    }
    if (s.length % 2 === 1) {
        return false;
    }
    let stack = [];
    for (let i in s) {
        if (s[i] === '(') {
            stack.push(')');
        } else if (s[i] === '[') {
            stack.push(']');
        } else if (s[i] === '{') {
            stack.push('}');
        } else if (stack.length === 0 || stack.pop() !== s[i]) {
            return false;
        }
    }
    if (stack.length > 0) {
        return false;
    } else {
        return true;
    }
}
let res = isValid("[(){}[]({");
console.log(res);