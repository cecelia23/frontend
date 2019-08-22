​function uniqueify (arr, func) {
    if (! func) {
        let set = new Set(arr);
        return [...set];
    }
    let a = func.arguments[0];
    for (let i in a.getOwnProperties()) {
        
    }
}