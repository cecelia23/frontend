String.prototype.Format = function () {
    let args = arguments;
    let res;
    res = this.replace(/\{\{(\w+)\}\}/g, function (substring, k) { 
        return args[k];
    });
    res = res.replace(/\{(\w+)\}/g, function (substring, k) { 
        return args[k];
    });
    return res;
}

let res = '{0},hello, {1}, ddd.,{2}'.Format('lily', 23, 'jddih');
console.log(res);