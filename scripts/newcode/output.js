function output (str) {
    var arr = str.split("");
  
    var flag = 0;
    var len;
    // while(arr!=[]){
        var std = arr[0];       
        for (var i=1;i<arr.length;i++){
            if (arr == []){
                return flag;
            }
            if (arr[i] != std){
                std = arr[i];
                
            } else {  
                flag++;
                for (let k=i+1;k<arr.length;k++){
                    arr[k-2] = arr[k];
                }
                arr.length = arr.length-2;
                i = 0;
                std = arr [i];
                // console.log(std);
            }        
        }
    // }
    return flag;
}
// let res = output('1233241');
// let res = output('112233');
// let res = output('123321');
// if (res % 2 == 0) {
//     console.log("Yes,you can win!");
// }else {
//     console.log("Oh,no.");
// }
line = readline();
console.log(line);