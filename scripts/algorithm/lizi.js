var max_enertgy = function(item) {
    let x=0,y=0,z=0;
    let diff_x1,diff_x2,d
        // console.log(item[x][y][z]);
    if (x+1 <2){
    let diff_x1 = item[x][y][z]-item[x+1][y][z];
    }
    let diff_x1 = item[x][y][z]-item[x+1][y][z];
    let diff_y = item[x][y][z]-item[x][y+1][z];
    let diff_y = item[x][y][z]-item[x][y][z+1];


    // let diff_y = item[]
}


let arr = [[[7,2],[4,3]],[[6,1],[5,0]]];
// console.log(Math.max((...(...arr))));
console.log(arr.length);

    // [0, 0, 0, 7],
    // [0, 0, 1, 2],
    // [0, 1, 0, 4],
    // [0, 1, 1, 3],
    // [1, 0, 0, 6],
    // [1, 0, 1, 1],
    // [1, 1, 0, 5],
    // [1, 1, 1, 0]];
// let n = "0 0 0 7"
// let arr = n.split(" ");
// console.log(arr);
// let res = max_enertgy(arr);

// let n=2
// let arr = new Array(n);
// for (let i =0;i<n;i++){
//     arr[i] = new Array(n);
//     for (let j =0;j<n;j++){
//         arr[i][j]=new Array(n);
//     }
// }
// let r = "0 0 0 7".split(" ")[3];
// arr[1][1][1]=Number(r);

// arr[1][1][0]=10;

// console.log(arr);

