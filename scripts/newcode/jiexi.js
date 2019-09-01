function encode(input){
    var len = input.length;
    var arr_and = [];
    var arr_res = [];
    var obj={}
    for (let i=0;i<len;i++) {
        if (input[i] == '&'){
            arr_and.push(i);
            
        }else if(input[i] == '=') {
            arr_res.push(i);
        }
    }
    let j=0;
    let k=0;
    var res = input.replace(/=/g,":");
   
    var res1 = res.replace(/\&/g,",");
    console.log(res1);

    // for (let i=0;i<arr_res[arr_res.length-1];i++){
        var res2 = res1.replace(/\%3A/g,":");
        var res2 = res2.replace(/\%2F/g,"/");
        var res2 = res2.replace(/\%3D/g,"=");
    // }

    // var res2 = res1.replace(/%3A/g,":");
    // var res2 = res2.replace(/%2F/g,"/");
    // var res2 = res2.replace(/%3D/g,"=");



    // console.log(res1);

    while(k<arr_res.length){
        var prop=input.slice(j,arr_res[k]);
        var val = input.slice(arr_res[k]+1,arr_and[k]);
        j=arr_and[k]+1;
        k++;
        obj[prop]=val;
        
    }
    var res = JSON.stringify(obj);
    console.log(res);

}

// try{
//     console.log(encode(JSON.parse(input)));
// } catch(error) {
//     console.log(error.message);
// }

encode("a=b&c=d&e=f%3A%2F%2F=hfkufutf");
