function createFlowers(context,n,dx,dy,radius,length){
    context.beginPath();
    var dig=Math.PI*2/n;
    //保证第一次循环可以画出第一片花瓣（若不写moveTo，开始时无落笔点，则第一次循环不会画第一片花瓣）
    context.moveTo(dx,dy+radius);
    for(i=1;i<n+1;i++){
        x=Math.sin(i*dig)*radius+dx;
        y=Math.cos(i*dig)*radius+dy;
        ctrlX=Math.sin((i-0.5)*dig)*length+dx;
        ctrlY=Math.cos((i-0.5)*dig)*length+dy;
        context.quadraticCurveTo(ctrlX,ctrlY,x,y);
    }

    context.closePath();

}
