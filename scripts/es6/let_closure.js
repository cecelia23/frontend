var func = [];
for (let i=0;i<10;i++){
    func.push(function(){
        console.log(i);
    });
}
func.forEach(function(fun_i){
    fun_i();
})