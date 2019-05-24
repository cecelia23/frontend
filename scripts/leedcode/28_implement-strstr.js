var strStr = function(haystack, needle) {
    // let res = haystack.indexOf(needle);
    let tag;
    if (needle.length === 0) {
      return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[0]) {
        tag = i;
        for (var j = 1; j < needle.length; j++) {
          if (i+j < haystack.length) {
            if (haystack[i+j] !== needle[j]) {
              break;
            }
           }else {
            return -1;
          }
        }
        if (j == needle.length) {
          return tag;
        }
      }
    }
    return -1;
};

let res = strStr("mississippi","ppio");
console.log(res);