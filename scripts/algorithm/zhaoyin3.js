function main(param_1, param_2, param_n){
    //请勿修改main()的函数名称
    //输入数据时，字符串数据前后需加英文引号。输入多个数据时请用英文逗号隔开，并且与main()中参数个数相同
    let count = 1;
    let n = param_1;
 	for (let i = 1; i <= n; i++) {
      let multi = 9;
      let base = 9;
      for (let j = 1; j < i ; j++) {
        multi *= base;
        base --;
      }
      count += multi;
    }
  	console.log(count);
}
main(3);