function createRoundRect(context,x,y,width,height,radius){
    //顺时针画
    context.beginPath();
    context.moveTo(x,y+radius);
    context.arcTo(x,y,x+radius,y,radius);
    context.lineTo(x+width-radius,y);
    context.arcTo(x+width,y,x+width,y+radius,radius);
    context.lineTo(x+width,y+height-radius);
    context.arcTo(x+width,y+height,x+width-radius,y+height,radius);
    context.lineTo(x+radius,y+height);
    context.arcTo(x,y+height,x,y+height-radius,radius);
    context.lineTo(x,y+radius);
    context.closePath();
}