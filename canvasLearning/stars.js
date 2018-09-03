//画多边形（奇数）
function createStars(context,n,dx,dy,length){
    context.beginPath();
    //画笔转动的角度为720
    var dig=Math.PI*4/n;
    context.moveTo(dx,dy+length)
    //第一次循环不连接，只生成第一个落点
    for(i=0;i<n;i++){
        var x=Math.sin(i*dig);
        var y=Math.cos(i*dig);
        context.lineTo(x*length+dx,y*length+dy);
    }
    context.closePath();

}
