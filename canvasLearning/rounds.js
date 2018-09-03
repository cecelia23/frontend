function createRounds(context,n){
        
    for(i=0;i<n;i++){
        context.beginPath();
        context.arc(i*30,i*30,(i+1)*10,0,Math.PI*2);
        context.closePath();
        context.fillStyle='rgba(255,0,255,'+(n-i)*0.1+')';
        context.fill();
    }
}