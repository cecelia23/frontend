function judgeDirection (d1, n, str) {
    let cur =  d1;
    for (let i of str) {
        if (i === 'L') {
            cur =  cur.left;
        } else if (i === 'R') {
            cur = cur.right;
        }
    }
    console.log(cur.val);
}

function doubleLink (val) {
    this.val = val;
    this.left = this.right = null
}

let d1 = new doubleLink('N');
let d2 = new doubleLink('E');
let d3 = new doubleLink('S');
let d4 = new doubleLink('W');
d1.right = d2;
d2.right = d3;
d3.right = d4;
d4.right = d1;
d1.left = d4;
d4.left = d3;
d3.left = d2;
d2.left = d1;
judgeDirection(d1, 3 ,'LRR');