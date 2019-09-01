var a=[];
for (let i=0;i<10;i++){
    var c=i;
    a[i]=function(){
        console.log(c);
    };
}
a[6]();