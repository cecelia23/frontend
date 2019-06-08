var isPalindrome = function(s) {
    if (!s || s.length === 1) {
      return true;
    }
    s = s.toLowerCase();
    let i = 0, j = s.length -1;
    let reg = /[a-z0-9]/;
    while (i < j) {
      while(!reg.test(s[i])) {
        i++;
      }
      while(!reg.test(s[j])) {
        j--;
      }
      if (s[i] !== s[j]) {
        break;
      } else {
        i++;
        j--;
      }
    }
    if (i >= j) {
      return true;
    } else {
      return false;
    }
};

let input = "a a";
let res = isPalindrome(input);
console.log(res);