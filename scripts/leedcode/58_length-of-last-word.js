var lengthOfLastWord = function(s) {
    let idx = s.lastIndexOf(' ');
    if (idx === -1) {
      return s.length;
    } else if (idx === s.length - 1) {
      if (idx === 0) {
        return 0;
      }
      let second_idx = s.lastIndexOf(' ', idx-1);
      while (second_idx !== -1 && idx - second_idx === 1) {
        idx = second_idx;
        second_idx = s.lastIndexOf(' ', second_idx - 1);
        // console.log(idx, second_idx);
      }
      if (idx === 0) {
        return 0
      } else {
        return idx - second_idx - 1;
      }
    } else {
      return s.length - 1 - idx;
    }
};

let res = lengthOfLastWord("  a  ");
console.log(res);