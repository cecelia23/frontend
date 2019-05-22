// // console.log(s1);
// // test();
// // function test(){
// //     console.log(s1);
// //     var s1="hello";
// // }
// // var arr=[,,,,,];
// // // console.log(arr.length);

// // // var s=~("32");
// // // console.log(s)
// // // const a=[3,5];
// // // const f=(b,...a)=>(a+b);
// // // console.log([0,0,0].fill(3,2,4));

// // function foo(num){
// //     this.count++;
// //     console.log(num);
// // }
// // foo.count = 0;
// // for (var i=0;i<10;i++){
// //     if (i>5){
// //         foo(i);
// //     }
// // }
// // console.log(foo.count);

// let y=0.3-.2;
// let z=7;
// let obj={a:10};
// // console.log(y);

// console.log(change(z));
// console.log(change(obj));
// function change(obj){
//     if (obj instanceof Object){
    
//       if (y===0.1){
    
//           obj.a=0.8;
    
//         }else{
    
//         obj={t:"mumble"};
    
//         }
    
//       }else{
    
//       obj =9 ;
    
//       }
//     return obj;
//     }


var a=2;
var obj= {
    b:3
};
function foo(str){
    "use strict";
    eval(str);
}

function boz(data,param){
    with(data){
        c=param;
    }
    return data;
    console.log(data);
    console.log(c);
}

foo('var a = 4');
if (obj.b<a){
    boz(obj,true);
}else{
    var res = boz(obj,"hello");
    console.log(res);
}