t sub = "";
  let len = 0;
  for (let i of s) {
    if (sub.indexOf(i) == -1) {
      sub += i;
      len = len > sub.length ? len : sub.length;
    } else {
      sub = sub.substr(sub.indexOf(i)+1) + i;
    }
  }
  return 