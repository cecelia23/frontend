function change_times(input1,input2){
    // let arr = [];
    let num = input2.split(" ");
    // for (let i=0;i<input1;i++){
    //     arr[i]= i+1 ;
    // }
    let j=num.length-1;
    let k = j-1;
    while(num[k]<num[j] && k>=0){
        j--;
        k--;
    }
    console.log(k+1);
}
// change_times(Number("5"),"5 2 1 3 4");
change_times(Number("5"),"1 2 3 4 5");
